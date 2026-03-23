import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Papa from 'papaparse';
import { supabase } from './supabase';
import TopNav from './TopNav';

export default function AdminDashboard() {
  const [guests, setGuests] = useState([]);
  const [csvData, setCsvData] = useState([]);
  const [csvFileName, setCsvFileName] = useState('');
  const [uploadStatus, setUploadStatus] = useState('idle');
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editRow, setEditRow] = useState({});
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchGuests();
  }, []);

  async function fetchGuests() {
    setLoading(true);
    const { data, error } = await supabase
      .from('guests')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error) setGuests(data || []);
    setLoading(false);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setCsvFileName(file.name);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete(results) {
        const rows = results.data.map((row) => {
          const first = (row.first_name || row.firstName || '').trim();
          const last = (row.last_name || row.lastName || '').trim();
          const fullName = (row.name || row.Name || '').trim();
          let firstName = first;
          let lastName = last;
          let name = fullName;
          if (!firstName && name) {
            const parts = name.split(/\s+/);
            firstName = parts[0] || '';
            lastName = parts.slice(1).join(' ') || '';
          }
          if (!name && firstName) {
            name = [firstName, lastName].filter(Boolean).join(' ');
          }
          return {
            name,
            first_name: firstName,
            last_name: lastName,
            building: (row.building || row.Building || '').trim(),
            unit: (row.unit || row.Unit || '').trim(),
          };
        });
        setCsvData(rows.filter((r) => r.name));
      },
    });
  }

  async function handleUpload() {
    if (!csvData.length) return;
    setUploadStatus('uploading');
    const { error } = await supabase.from('guests').insert(csvData);
    if (error) {
      setUploadStatus('error');
    } else {
      setUploadStatus('success');
      setCsvData([]);
      setCsvFileName('');
      fetchGuests();
    }
  }

  async function handleClearGuests() {
    if (!window.confirm('Clear all guests? This cannot be undone.')) return;
    const { error } = await supabase.from('guests').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (!error) {
      setGuests([]);
    }
  }

  function startEdit(guest) {
    setEditingId(guest.id);
    setEditRow({
      name: guest.name || '',
      first_name: guest.first_name || '',
      last_name: guest.last_name || '',
      building: guest.building || '',
      unit: guest.unit || '',
    });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditRow({});
  }

  async function saveEdit(id) {
    setSaving(true);
    const parts = editRow.name.trim().split(/\s+/);
    const updates = {
      ...editRow,
      first_name: editRow.first_name || parts[0] || '',
      last_name: editRow.last_name || parts.slice(1).join(' ') || '',
    };
    const { error } = await supabase.from('guests').update(updates).eq('id', id);
    setSaving(false);
    if (!error) {
      setEditingId(null);
      setEditRow({});
      fetchGuests();
    }
  }

  async function deleteGuest(id, name) {
    if (!window.confirm(`Delete ${name}?`)) return;
    const { error } = await supabase.from('guests').delete().eq('id', id);
    if (!error) {
      setGuests((prev) => prev.filter((g) => g.id !== id));
    }
  }

  const editField = (field) => (
    <input
      value={editRow[field]}
      onChange={(e) => setEditRow({ ...editRow, [field]: e.target.value })}
      className="w-full rounded-lg border border-white/15 bg-white/5 px-2 py-1.5 text-sm text-white focus:border-gold-500/50 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
    />
  );

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="chip">Admin</span>
          </div>
          <h1 className="page-title">Admin Dashboard</h1>
          <p className="page-subtitle">Manage guest list via CSV upload.</p>
        </div>

        {/* CSV Upload */}
        <div className="card p-6 mb-8">
          <p className="card-header">Import</p>
          <h2 className="card-title">Upload guest CSV</h2>
          <p className="mt-2 text-sm text-champagne-400/80">
            CSV should have columns: <code className="text-gold-400">name</code> (or <code className="text-gold-400">first_name</code> + <code className="text-gold-400">last_name</code>), <code className="text-gold-400">building</code>, <code className="text-gold-400">unit</code>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <label className="ghost-button cursor-pointer">
              Choose file
              <input type="file" accept=".csv" className="hidden" onChange={handleFileChange} />
            </label>
            {csvFileName && <span className="text-sm text-champagne-400/80">{csvFileName}</span>}
          </div>

          {csvData.length > 0 && (
            <>
              <div className="mt-6 overflow-x-auto rounded-xl border border-white/10">
                <table className="w-full text-sm text-left">
                  <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-champagne-400/60">
                    <tr>
                      <th className="px-4 py-3">Name</th>
                      <th className="px-4 py-3">Building</th>
                      <th className="px-4 py-3">Unit</th>
                    </tr>
                  </thead>
                  <tbody className="text-champagne-400/80">
                    {csvData.map((row, i) => (
                      <tr key={i} className="border-b border-white/5">
                        <td className="px-4 py-2 text-white">{row.name}</td>
                        <td className="px-4 py-2">{row.building}</td>
                        <td className="px-4 py-2">{row.unit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <button className="cta-button" onClick={handleUpload} disabled={uploadStatus === 'uploading'}>
                  {uploadStatus === 'uploading' ? 'Uploading…' : `Upload ${csvData.length} guests`}
                </button>
                {uploadStatus === 'success' && <span className="text-sm text-gold-400">Uploaded successfully.</span>}
                {uploadStatus === 'error' && <span className="text-sm text-red-400">Upload failed. Check console.</span>}
              </div>
            </>
          )}
        </div>

        {/* Guest List */}
        <div className="card p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div>
              <p className="card-header">Database</p>
              <h2 className="card-title">Current guests ({guests.length})</h2>
            </div>
            {guests.length > 0 && (
              <button className="ghost-button text-xs" onClick={handleClearGuests}>
                Clear all
              </button>
            )}
          </div>

          {loading ? (
            <p className="text-sm text-champagne-400/60">Loading…</p>
          ) : guests.length === 0 ? (
            <p className="text-sm text-champagne-400/60">No guests yet. Upload a CSV above.</p>
          ) : (
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm text-left">
                <thead className="border-b border-white/10 bg-white/[0.03] text-xs uppercase tracking-wider text-champagne-400/60">
                  <tr>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Building</th>
                    <th className="px-4 py-3">Unit</th>
                    <th className="px-4 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-champagne-400/80">
                  {guests.map((g) => (
                    <tr key={g.id} className="border-b border-white/5">
                      {editingId === g.id ? (
                        <>
                          <td className="px-3 py-2">{editField('name')}</td>
                          <td className="px-3 py-2">{editField('building')}</td>
                          <td className="px-3 py-2">{editField('unit')}</td>
                          <td className="px-3 py-2 text-right whitespace-nowrap">
                            <button
                              onClick={() => saveEdit(g.id)}
                              disabled={saving}
                              className="text-xs font-medium text-gold-400 hover:underline mr-3"
                            >
                              {saving ? 'Saving…' : 'Save'}
                            </button>
                            <button
                              onClick={cancelEdit}
                              className="text-xs font-medium text-champagne-400/60 hover:underline"
                            >
                              Cancel
                            </button>
                          </td>
                        </>
                      ) : (
                        <>
                          <td className="px-4 py-2 text-white">{g.name}</td>
                          <td className="px-4 py-2">{g.building}</td>
                          <td className="px-4 py-2">{g.unit}</td>
                          <td className="px-4 py-2 text-right whitespace-nowrap">
                            <button
                              onClick={() => startEdit(g)}
                              className="text-xs font-medium text-gold-400 hover:underline mr-3"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteGuest(g.id, g.name)}
                              className="text-xs font-medium text-red-400/70 hover:underline"
                            >
                              Delete
                            </button>
                          </td>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
