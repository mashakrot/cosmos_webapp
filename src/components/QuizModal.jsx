import { useState } from "react";
import { planetQuizzes } from "../data/planetQuizzes";

export default function QuizModal({ planet, onPass, onFail, onExit, characterImg, setCharacterEmotion }) {
    const questions = planetQuizzes[planet.id];

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);

    if (!questions) return null;

    const handleAnswer = (index) => {
        if (selected !== null) return;

        setSelected(index);

        if (index === questions[current].correct) {
            setScore((s) => s + 1);
            setCharacterEmotion("happy");
        } else {
            setCharacterEmotion("sad");
        }


        // TODO: turn it back 
        // setTimeout(() => setCharacterEmotion("idle"), 1500);


    };

    const next = () => {
        setSelected(null);

        if (current + 1 < questions.length) {
            setCurrent((c) => c + 1);
        } else {
            score + (selected === questions[current].correct ? 1 : 0) >= 3 ? onPass() : onFail();
        }
    };

    return (
        <div className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50 px-4">
            <div className="flex items-center justify-center w-full gap-3">
                <img src={characterImg} alt="Guide" className="w-36 h-auto mt-20 mr-12 mb-4 rounded-full border-none flex-none self-start" />

                <div className="bg-spaceCard w-full max-w-lg p-6 rounded-2xl relative">
                    <button onClick={onExit} className="absolute top-4 right-4 text-muted hover:text-accent">×</button>

                    <h2 className="text-xl font-semibold mb-2">{planet.name} Quiz</h2>
                    <p className="text-sm text-muted mb-4">Question {current + 1} of {questions.length}</p>

                    <h3 className="text-lg mb-4">{questions[current].question}</h3>

                    <div className="flex flex-col gap-3">
                        {questions[current].options.map((opt, i) => (
                            <button key={i} onClick={() => handleAnswer(i)} disabled={selected !== null}
                                className={`px-4 py-2 rounded-lg border transition ${selected === null
                                    ? "border-white/20 hover:border-accent"
                                    : i === questions[current].correct
                                        ? "border-green-500 bg-green-500/10"
                                        : i === selected
                                            ? "border-red-500 bg-red-500/10"
                                            : "border-white/10 opacity-40"
                                    }`}>
                                {opt}
                            </button>
                        ))}
                    </div>

                    {selected !== null && (
                        <button onClick={next} className="mt-6 w-full bg-accent text-black py-2 rounded-lg hover:bg-red-500 transition">
                            {current + 1 === questions.length ? "Finish Quiz" : "Next"}
                        </button>
                    )}
                </div>
            </div>
        </div>

    );
}
