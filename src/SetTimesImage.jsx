import { useNavigate, useParams } from 'react-router-dom';
import TopNav from './TopNav';

const imageMap = {
  friday: '/friday.jpg',
  saturday: '/saturday.jpg',
  sunday: '/sunday.jpg'
};

export default function SetTimesImage() {
  const { day } = useParams();
  const imageSrc = imageMap[day];
  const navigate = useNavigate();

  return (
    <div className="page-shell animate-fade">
      <div className="page-container text-center">
        <TopNav />
        <div className="mb-4 flex justify-center">
          <button className="ghost-button" onClick={() => navigate('/set-times')}>
            ← Back to set times
          </button>
        </div>
        <h1 className="page-title capitalize">{day} Set Times</h1>
        <p className="page-subtitle">Latest schedule, optimized for mobile.</p>
        {imageSrc ? (
          <div className="card mt-6 overflow-hidden">
            <img
              src={imageSrc}
              alt={`${day} set times`}
              className="mx-auto w-full max-w-4xl rounded-2xl"
            />
          </div>
        ) : (
          <p className="mt-6 text-red-300">Set times not available for this day.</p>
        )}
      </div>
    </div>
  );
}
