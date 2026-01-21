import { useEffect, useState, useRef } from "react";
import { fetchMarsWeather } from "../services/nasaApi";

import marsImg from "/src/assets/img/mars.png";
import decorSvg from "/src/assets/img/decorSvg.svg";
import tempIcon from "/src/assets/img/temperature.svg";
import windIcon from "/src/assets/img/wind-speed.svg";
import pressureIcon from "/src/assets/img/pressure.svg";
import dustIcon from "/src/assets/img/dust-level.svg";
import arrowIcon from "/src/assets/img/arrow.svg";

function StatCard({ label, value, unit, icon, explanation }) {
  return (
    <div className="relative group border-none rounded-xl p-2 text-center flex flex-col items-center gap-2 cursor-default">
      {icon && (
        <img src={icon} alt="" className="w-10 h-10 mb-2 border-none" />
      )}
      <div className="w-8 h-1 bg-[var(--accent)] rounded-full mb-6" />

      <div className="text-2xl font-semibold text-white">
        {value ?? "N/A"}
        {value !== null && (
          <span className="text-sm text-muted ml-1">{unit}</span>
        )}
      </div>
      <div className="mt-1 text-sm text-muted tracking-wide">
        {label}
      </div>

      {explanation && (
        <div className="absolute bottom-full mb-3 w-48 opacity-0 pointer-events-none group-hover:opacity-100 transition bg-spaceCard text-xs text-muted p-3 rounded-lg shadow-lg">
          {explanation}
        </div>
      )}
    </div>
  );
}

export default function MarsWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const detailsRef = useRef(null);

  useEffect(() => {
    fetchMarsWeather()
      .then((data) => {
        const sols = data.sol_keys;
        if (!sols || sols.length === 0) {
          throw new Error("No Mars weather data available");
        }

        const latestSolKey = sols[sols.length - 1];
        const sol = data[latestSolKey];

        setWeather({
          sol: latestSolKey,
          temp: sol?.AT?.av ?? null,
          wind: sol?.HWS?.av ?? null,
          pressure: sol?.PRE?.av ?? null,
          season: sol?.Season ?? "Unknown",
        });

        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="px-6 py-20 text-muted">
        Loading Mars weather…
      </section>
    );
  }

  if (error) {
    return (
      <section className="px-6 py-20 text-red-400">
        {error}
      </section>
    );
  }

  return (
    <div>
      <section className="bg-space min-h-screen py-20 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-semibold tracking-wide mb-4">
              Today on Mars
            </h1>

            <div className="w-20 h-1 bg-[var(--accent)] rounded-full mb-6" />

            <p className="text-accent max-w-md mb-10 leading-relaxed">
              Fourth planet from the Sun – is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps, extinct volcanoes, canyons and weather.
            </p>

            <p className="text-muted max-w-md mb-4">
              Latest atmospheric data recorded by NASA’s InSight lander at Elysium Planitia.
            </p>

            <p className="text-sm text-muted mb-4">
              Sol {weather.sol} · Season: {weather.season}
            </p>

            <button
              onClick={() =>
                detailsRef.current?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center gap-2 text-sm text-redAccent hover:gap-3 transition-all mb-10">
              Read more
              <img
                src={arrowIcon}
                alt="Select Date"
                className="w-4 h-4 cursor-pointer rounded-none border-none" />
            </button>
            <div className="grid grid-cols-4 gap-3 max-w-2lg">
              <StatCard
                label="Temperature"
                value={weather.temp}
                unit="°C"
                icon={tempIcon}
                explanation="Mars average: −63°C • Earth average: +15°C" />
              <StatCard
                label="Wind Speed"
                value={weather.wind}
                unit="m/s"
                icon={windIcon}
                explanation="Mars winds can reach 30 m/s, but feel weaker due to thin air"/>
              <StatCard
                label="Pressure"
                value={weather.pressure}
                unit="Pa"
                icon={pressureIcon}
                explanation="Mars pressure is <1% of Earth’s sea-level pressure"/>
              <StatCard
                label="Dust Level"
                value={weather.dust}
                icon={dustIcon}
                explanation="Dust levels vary; high levels can obscure sunlight"/>
            </div>
          </div>

          <div className="flex items-center justify-center relative">
            <img src={decorSvg} alt=""
              aria-hidden="true"
              className="absolute w-lg border-none pointer-events-none" />
            <img src={marsImg} alt="Mars"
              className="w-full pt-5 pb-5 max-w-md rounded-2xl border-none shadow-lg mx-auto" />
          </div>

          {/* TODO: */}
          {/* mobile */}
        </div>
      </section>

      <section className="bg-space min-h-screen px-6 py-20 text-white">
        <div ref={detailsRef} className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">
            About Mars Weather Data
          </h2>

          <div className="w-16 h-1 bg-[var(--accent)] rounded-full mb-6" />

          <p className="text-muted max-w-2xl leading-relaxed">
            Weather data is collected by NASA’s InSight lander, which measures temperature, wind, and pressure on the surface of Mars. Due to power constraints and dust accumulation, some data may be missing or incomplete.
            bla bla bla...
          </p>
        </div>
      </section>
    </div>
  );
}
