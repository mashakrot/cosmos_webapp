import LifeFull from "../assets/img/life-full.svg";
import LifeEmpty from "../assets/img/life-empty.svg";

export default function LivesDisplay({ lives, maxLives = 3 }) {
    return (
        <div className="flex items-center gap-2 mb-6">
            {Array.from({ length: maxLives }).map((_, i) => (
                <img
                    key={i}
                    src={i < lives
                            ? {LifeFull}
                            : {LifeEmpty}
                    }
                    alt="life" className={"w-6 h-6 transition-all border-none duration-300 "} />
            ))}
        </div>
    );
}
