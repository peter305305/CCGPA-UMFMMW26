import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabase';
import TopNav from './TopNav';

export default function PhotoUpload({ guest }) {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef();
  const navigate = useNavigate();

  function handleSelect(e) {
    const selected = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selected]);
    setDone(false);
    setError('');
  }

  function removeFile(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  async function handleUpload() {
    if (files.length === 0) return;
    setUploading(true);
    setError('');

    try {
      for (const file of files) {
        const ext = file.name.split('.').pop();
        const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
        const { error: uploadError } = await supabase.storage
          .from('photos')
          .upload(name, file);
        if (uploadError) throw uploadError;
      }
      setDone(true);
      setFiles([]);
    } catch (err) {
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        {guest && <TopNav />}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 lux-pill inline-flex items-center gap-2">
            Photo Upload
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" aria-hidden />
          </div>
          <h1 className="page-title">Share Your Pictures</h1>
          <p className="page-subtitle">Upload your best moments from the weekend</p>
        </div>

        <div className="card mx-auto max-w-lg p-6">
          <input
            ref={fileRef}
            type="file"
            accept="image/*,video/*"
            multiple
            className="hidden"
            onChange={handleSelect}
          />

          <button
            className="cta-button w-full"
            onClick={() => fileRef.current.click()}
            disabled={uploading}
          >
            Select Photos or Videos
          </button>

          {files.length > 0 && (
            <div className="mt-4 space-y-2">
              {files.map((file, i) => (
                <div key={i} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-champagne-400/80">
                  <span className="truncate mr-3">{file.name}</span>
                  <button
                    className="shrink-0 text-xs text-champagne-400/60 hover:text-white"
                    onClick={() => removeFile(i)}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                className="cta-button mt-4 w-full"
                onClick={handleUpload}
                disabled={uploading}
              >
                {uploading ? 'Uploading…' : `Upload ${files.length} file${files.length > 1 ? 's' : ''}`}
              </button>
            </div>
          )}

          {done && (
            <p className="mt-4 text-center text-sm font-medium text-gold-400">
              Uploaded successfully! Thank you!
            </p>
          )}

          {error && (
            <p className="mt-4 text-center text-sm text-champagne-400/80">{error}</p>
          )}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="ghost-button" onClick={() => navigate(guest ? '/dashboard' : '/')}>
            {guest ? 'Back to Lobby' : 'Back to Welcome'}
          </button>
        </div>
      </div>
    </div>
  );
}
