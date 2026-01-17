const API_KEY = import.meta.env.NASA_API_KEY;

export async function fetchApod() {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
  );
  return res.json();
}

// APOD
// https://api.nasa.gov/planetary/apod?api_key=API_KEY
// Mars Weather
// https://api.nasa.gov/insight_weather/?api_key=API_KEY
// Mars Rover Photos
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=API_KEY

export async function fetchMarsWeather() {
  // InSight API is limited — placeholder structure
  return {
    temp: -60,
    pressure: 720,
    wind: 5,
  };
}
