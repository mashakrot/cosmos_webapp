import PlanetButton from "./PlanetButton";

export default function SolarSystemView({
  sun,
  planets,
  clearedPlanets,
  onSelectPlanet,
  characterImg,
}) {
  return (
    <div className="relative w-[520px] h-[520px] mx-auto mt-8">
      {/* <img
        src={characterImg}
        alt="Guide"
        className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-auto z-20"
      /> */}
      <PlanetButton
        planet={sun}
        isSun
        cleared={clearedPlanets.includes(sun.id)}
        onClick={() => onSelectPlanet(sun)} />

      {planets.map((planet, index) => (
        <PlanetButton
          key={planet.id}
          planet={planet}
          index={index}
          cleared={clearedPlanets.includes(planet.id)}
          onClick={() => onSelectPlanet(planet)} />
      ))}
    </div>
  );
}
