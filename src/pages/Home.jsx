import { useState } from "react";
import PlanetCard from "../components/PlanetCard";
import PlanetModal from "../components/PlanetModal";

const planets = [
  { name: "Mercury", info: "Closest planet to the Sun." },
  { name: "Venus", info: "Hottest planet in the Solar System." },
  { name: "Earth", info: "Our home planet." },
  { name: "Mars", info: "Known as the Red Planet." },
];

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  return (
    <main className="font-orbitron bg-space min-h-screen text-white">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold mb-2">
          Discover the Cosmos
        </h1>
        <p className="text-muted max-w-xl">
          Explore the Solar System by clicking on a planet to reveal
          fascinating facts and imagery.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12">
          {planets.map((planet) => (
            <PlanetCard
              key={planet.name}
              planet={planet}
              onClick={() => setSelectedPlanet(planet)}
            />
          ))}
        </div>

        {selectedPlanet && (
          <PlanetModal
            planet={selectedPlanet}
            onClose={() => setSelectedPlanet(null)}
          />
        )}
      </section>
    </main>
  );
}
