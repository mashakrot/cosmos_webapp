export default function GameOverModal({ onRestart, characterImg }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-spaceCard flex items-center gap-10 p-10 rounded-2xl max-w-4xl ">
        
        <img
          src={characterImg}
          alt="Guide"
          className="w-40 h-auto flex-none border-none"/>

        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold text-red-500 mb-3">
            Game Over
          </h2>

          <p className="text-white mb-6">
            You lost all your lives!
          </p>

          <button
            onClick={onRestart}
            className="bg-accent px-5 py-2 rounded-lg text-black hover:bg-red-500 transition">
            Restart
          </button>
        </div>

      </div>
    </div>
  );
}
