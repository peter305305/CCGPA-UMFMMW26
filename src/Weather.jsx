import { useState, useEffect } from 'react';
import TopNav from './TopNav';

const WEATHER_URL =
  'https://api.open-meteo.com/v1/forecast?latitude=25.79&longitude=-80.13&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weathercode&temperature_unit=fahrenheit&timezone=America%2FNew_York&forecast_days=7';

const weatherLabels = {
  0: 'Clear sky',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Foggy',
  48: 'Fog',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Rain',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snow',
  75: 'Heavy snow',
  80: 'Light showers',
  81: 'Showers',
  82: 'Heavy showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm w/ hail',
  99: 'Severe thunderstorm',
};

const weatherIcons = {
  0: '\u2600\uFE0F',
  1: '\uD83C\uDF24',
  2: '\u26C5',
  3: '\u2601\uFE0F',
  45: '\uD83C\uDF2B',
  48: '\uD83C\uDF2B',
  51: '\uD83C\uDF26',
  53: '\uD83C\uDF27',
  55: '\uD83C\uDF27',
  61: '\uD83C\uDF26',
  63: '\uD83C\uDF27',
  65: '\uD83C\uDF27',
  71: '\u2744\uFE0F',
  73: '\uD83C\uDF28',
  75: '\uD83C\uDF28',
  80: '\uD83C\uDF26',
  81: '\uD83C\uDF27',
  82: '\u26C8',
  95: '\u26C8',
  96: '\u26C8',
  99: '\u26C8',
};

function formatDay(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export default function Weather() {
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(WEATHER_URL)
      .then((r) => r.json())
      .then((data) => setForecast(data.daily))
      .catch(() => setError(true));
  }, []);

  return (
    <div className="page-shell animate-fade">
      <div className="page-container">
        <TopNav />
        <div className="mb-8">
          <h1 className="page-title">Miami Beach Weather</h1>
          <p className="page-subtitle">7-day forecast for Ultra week</p>
        </div>

        {error && (
          <div className="card p-6 text-center text-champagne-400/80">
            Unable to load forecast. Please try again later.
          </div>
        )}

        {!forecast && !error && (
          <div className="card p-6 text-center text-champagne-400/60">Loading forecast…</div>
        )}

        {forecast && (
          <div className="space-y-4">
            {forecast.time.map((date, i) => {
              const code = forecast.weathercode[i];
              return (
                <div key={date} className="card p-5">
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{weatherIcons[code] || '\u2601\uFE0F'}</span>
                      <div>
                        <p className="font-semibold text-white">{formatDay(date)}</p>
                        <p className="text-sm text-champagne-400/70">{weatherLabels[code] || 'Unknown'}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="text-right">
                        <p className="text-white font-semibold text-lg">
                          {Math.round(forecast.temperature_2m_max[i])}°
                          <span className="text-champagne-400/60 font-normal"> / {Math.round(forecast.temperature_2m_min[i])}°</span>
                        </p>
                      </div>
                      <div className="text-right min-w-[4rem]">
                        <p className="text-champagne-400/70">
                          {forecast.precipitation_probability_max[i]}% rain
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-6 card p-6">
          <p className="card-header">Quick reference</p>
          <h2 className="card-title">What to expect</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm text-champagne-400/80">
            <div>
              <p className="font-semibold text-white">Temperature</p>
              <p>High 80s °F / Low 70s °F</p>
            </div>
            <div>
              <p className="font-semibold text-white">Conditions</p>
              <p>Partly cloudy, chance of showers</p>
            </div>
            <div>
              <p className="font-semibold text-white">Tip</p>
              <p>Sunscreen, hat, and a light rain layer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
