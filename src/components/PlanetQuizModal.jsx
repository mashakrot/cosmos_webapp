import { useEffect } from "react";

export default function PlanetQuizModal({
  planet,
  onClose,
  onTakeQuiz,
  cleared,
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "");
  }, []);

  return (
    <div onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div onClick={(e) => e.stopPropagation()}
        className="bg-spaceCard max-w-4xl w-full rounded-2xl p-8 relative overflow-y-auto no-scrollbar flex flex-col md:flex-row gap-6">
        <div className="flex-none self-start flex justify-center md:justify-start">
          <img
            src={planet.image}
            alt={planet.name}
            className="w-40 md:w-48 h-auto rounded-xl border-none" />
        </div>

        <div className="flex-1 text-white">
          <h2 className="text-2xl font-semibold mb-4">{planet.name}</h2>
          <p className="text-muted text-md mb-2 italic">
            {planet.introQuestion}
          </p>

          <p className="text-md leading-relaxed mb-4">
            {planet.description}
          </p>

          {planet.funFact && (
            <div className="flex gap-4 items-start mt-6">
              <div className="w-[3px] h-20 bg-[#ff3b01] rounded-full" />
              <p className="text-md text-muted leading-relaxed">
                <span className="text-accent font-semibold block mb-1">
                  Did you know?

                </span>
                {planet.funFact}
              </p>
            </div>
          )}


          <div className="bg-black/30 rounded-lg p-4 mt-6 mb-6">
            <p className="text-md text-muted">
              <span className="font-semibold text-white block mb-1">
                Put it into perspective
              </span>
              {planet.comparison}
            </p>
          </div>
          
          <div className="mt-8">
            {!cleared ? (
              <button onClick={onTakeQuiz}
                className="bg-accent text-black px-6 py-2 rounded-lg hover:bg-red-500 transition">
                Take Quiz
              </button>
            ) : (
              <p className="text-green-400 font-semibold">✓ Planet Cleared</p>
            )}
          </div>
        </div>

        <button onClick={onClose}
          className="absolute top-4 right-4 text-xl text-muted hover:text-accent">
          ×
        </button>
      </div>
    </div>
  );
}
