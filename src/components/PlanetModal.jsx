export default function PlanetModal({ planet, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-spaceModal border border-white/10 rounded-2xl p-8 w-[90%] max-w-md">
        <h2 className="text-xl font-semibold mb-3">
          {planet.name}
        </h2>
        <p className="text-muted mb-6">
          {planet.info}
        </p>

        <button
          onClick={onClose}
          className="text-accent border border-accent px-4 py-2 rounded-lg
                     hover:bg-accent/10 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
