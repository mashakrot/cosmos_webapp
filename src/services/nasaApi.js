const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export async function fetchApod(date) {
  const url = new URL("https://api.nasa.gov/planetary/apod");
  url.searchParams.set("api_key", API_KEY);

  if (date) {
    url.searchParams.set("date", date);
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch APOD");
  }

  return res.json();
}

export async function fetchRecentApods(startDate, endDate) {
  const url = new URL("https://api.nasa.gov/planetary/apod");
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("start_date", startDate);
  url.searchParams.set("end_date", endDate);

  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch APOD archive");

  const data = await res.json();
  return data.reverse(); // newest first
}



export function extractCredit(explanation) {
  if (!explanation) return null;

  const match = explanation.match(
    /(Image Credit|Credit|Credits|Credit & Copyright):\s*(.*)$/i
  );

  return match ? match[2].trim() : null;
}


// APOD
// https://api.nasa.gov/planetary/apod?api_key=API_KEY
// Mars Weather
// https://api.nasa.gov/insight_weather/?api_key=API_KEY
// Mars Rover Photos
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=API_KEY

export async function fetchMarsWeather() {
  const res = await fetch(
    `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Mars weather");
  }

  return res.json();
}
