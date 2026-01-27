import { useEffect } from "react";

export default function PlanetModal({ planet, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

      <div className="bg-spaceCard max-w-4xl w-full rounded-2xl p-8 relative overflow-y-auto no-scrollbar flex flex-col md:flex-row gap-6"
        onClick={(e) => e.stopPropagation()}>


        <div className="flex-none flex justify-center md:justify-start">
          <img src={planet.image} alt={planet.name}
            className="w-10 md:w-48 h-auto rounded-xl border-none"/>
        </div>



        <div className="flex-1 text-white">
          <h2 className="text-2xl font-semibold mb-4">{planet.name}</h2>

          <p className="text-md text-white leading-relaxed mb-4">
            {planet.description}
          </p>
          <div className="flex gap-4 items-start mt-6">
            <div className="w-[3px] h-20 bg-[#ff3b01] rounded-full" />

            <p className="text-md text-muted leading-relaxed">
              <span className="text-accent font-semibold block mb-1">
                Fun fact
              </span>
              {planet.funFact}
            </p>
          </div>

        </div>

        <button onClick={onClose}
          className="absolute top-4 right-4 text-xl text-muted hover:text-accent" >
          ×
        </button>
      </div>
    </div>
  );
}
