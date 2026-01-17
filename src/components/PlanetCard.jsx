export default function PlanetCard({ planet, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-spaceCard border border-white/10 rounded-xl p-6 text-center
                 hover:-translate-y-1 hover:border-accent transition"
    >
      <h3 className="font-medium">{planet.name}</h3>
    </div>
  );
}
