export default function GameWinModal({ onRestart, characterImg }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
      <div className="bg-spaceCard flex items-center gap-10 p-10 rounded-2xl max-w-4xl ">


        <img src={characterImg} alt="Guide" className="w-40 h-auto mx-auto mb-4 flex-none border-none" />

        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Victory!</h2>
          <p className="text-white mb-6">You cleared all planets and the Sun!</p>
          <button onClick={onRestart} className="bg-accent px-4 py-2 rounded-lg text-black hover:bg-red-500 transition">
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}
