import ClearedIndicator from "../components/ClearedIndicator";

export default function PlanetButton({
  planet,
  onClick,
  index,
  isSun = false,
  cleared,
}) {
  if (isSun) {
    return (
      <button onClick={onClick}
        className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20" >

        <img
          src={planet.image}
          alt={planet.name}
          className="w-24 sm:w-28 md:w-32 lg:w-36 hover:scale-110 transition border-none" />
        {cleared && <ClearedIndicator />}


        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50" >
            <div
              className="bg-spaceCard px-3 py-2 rounded-lg shadow-lg text-xs text-white whitespace-nowrap" >
              {/* {planet.name} */}
              {cleared ? "✓ Cleared" : planet.name}
            </div>
          </div>
      </button>
    );
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute rounded-full border border-white/10 pointer-events-none"
        style={{
          width: planet.orbit * 2,
          height: planet.orbit * 2,
        }} />

      <button onClick={onClick}
        className="group absolute z-10"
        style={{ transform: `rotate(${index * 98}deg) translateX(${planet.orbit}px)` }} >
        <div style={{ transform: `rotate(-${index * 98}deg)` }}>
          <img
            src={planet.image}
            alt={planet.name}
            style={{ width: planet.size, height: planet.size }}
            className="hover:scale-125 transition-transform border-none" />
          {cleared && <ClearedIndicator />}

          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50" >
            <div
              className="bg-spaceCard px-3 py-2 rounded-lg shadow-lg text-xs text-white whitespace-nowrap" >
              {/* {planet.name} */}
              {cleared ? "✓ Cleared" : planet.name}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
