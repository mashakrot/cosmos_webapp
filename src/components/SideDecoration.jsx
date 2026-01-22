export default function SideDecoration() {
  const lines = [
    { id: 1, label: "01" },
    { id: 2 },
    { id: 3, label: "03" },
    { id: 4 },
    { id: 5, label: "05" },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-10 hidden lg:flex flex-col gap-6 pointer-events-none">
      {lines.map((line) => (
        <div key={line.id} className="flex items-center gap-3">
          <div className="w-6 h-[2px] bg-white/30" />

          {line.label && (
            <span className="text-sm tracking-widest text-white/40">
            
              {line.label}
            </span>

          )}
        </div>
      ))}
    </div>
  );
}
