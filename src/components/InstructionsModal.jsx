export default function InstructionsModal({ open, onClose, characterImg }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <img src={characterImg}
        alt="Guide"
        className="w-80 h-auto flex-shrink-0 border-none" />

      <div className="bg-spaceCard rounded-2xl p-6 max-w-lg w-full mx-4 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-muted hover:text-accent" >
          ×
        </button>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-accent">
            Game Instructions
          </h3>

          <p className="text-sm text-white">
            Welcome! Click on planets to learn about them.
          </p>

          <p className="text-sm text-white">
            Take a quiz for each planet. Pass the quiz to clear it.
          </p>

          <p className="text-sm text-white">
            Clear all planets and the Sun before you lose all lives ❤️
          </p>

          <button
            onClick={onClose}
            className="mt-3 bg-accent text-black px-4 py-2 rounded-lg hover:bg-red-500 transition" >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
