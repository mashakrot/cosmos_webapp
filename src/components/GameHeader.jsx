import LivesDisplay from "../components/LivesDisplay";

export default function GameHeader({ lives, characterImg }) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col items-start ml-4">
        <h2 className="text-2xl font-semibold mb-2">
          Discover the Cosmos
        </h2>
        
        {/* <img src={characterImg} alt="Guide" className="w-16 h-auto rounded-full" /> */}

        <LivesDisplay lives={lives} />
      </div>
    </div>
  );
}
