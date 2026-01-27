import { useState } from "react";

const PLANET_QUESTIONS = [
  {
    question: "Which planet is closest to the Sun?",
    options: ["Venus", "Mercury", "Earth", "Mars"],
    correct: 1,
    hint: "It's the smallest and fastest planet.",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1,
    hint: "It has iron oxide on its surface.",
  },
  {
    question: "Which is the hottest planet in our Solar System?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    correct: 1,
    hint: "It has a thick, toxic atmosphere.",
  },
  {
    question: "What is unique about Earth?",
    options: [
      "It has the most moons",
      "It is our home planet with life",
      "It is the largest planet",
      "It is closest to the Sun",
    ],
    correct: 1,
    hint: "It's the only known planet with life.",
  },
  {
    question: "Which planet has a massive storm called the Great Red Spot?",
    options: ["Saturn", "Uranus", "Jupiter", "Neptune"],
    correct: 2,
    hint: "It's the largest planet in our solar system.",
  },
  {
    question: "What is the primary composition of Mercury?",
    options: ["Gas and ice", "Rock and metal", "Water and ice", "Dust and rock"],
    correct: 1,
    hint: "It's a rocky, dense planet with no atmosphere.",
  },
  {
    question: "How many moons does Mars have?",
    options: ["0", "1", "2", "3"],
    correct: 2,
    hint: "Phobos and Deimos orbit Mars.",
  },
  {
    question: "Which planet is known for its prominent ring system?",
    options: ["Venus", "Mars", "Saturn", "Uranus"],
    correct: 2,
    hint: "It has beautiful icy rings.",
  },
  {
    question: "What makes Venus unique among rocky planets?",
    options: [
      "It has the most moons",
      "It rotates backwards",
      "It has no atmosphere",
      "It is closest to Earth",
    ],
    correct: 1,
    hint: "Its rotation is different from other planets.",
  },
  {
    question: "Which planet has the most moons?",
    options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
    correct: 1,
    hint: "It's the largest planet with a massive system of moons.",
  },
];

export default function Quiz() {
  const [gameState, setGameState] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [answers, setAnswers] = useState([]);

  const startQuiz = () => {
    setGameState("playing");
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setShowHint(false);
  };

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer !== null) return; 

    const question = PLANET_QUESTIONS[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct;

    setSelectedAnswer(answerIndex);
    if (isCorrect) {
      setScore(score + 1);
    }

    setAnswers([
      ...answers,
      {
        question: question.question,
        selected: answerIndex,
        correct: question.correct,
        isCorrect,
      },
    ]);
  };

  const handleNext = () => {
    if (currentQuestionIndex < PLANET_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowHint(false);
    } else {
      setGameState("finished");
    }
  };

  const resetQuiz = () => {
    setGameState("start");
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setAnswers([]);
  };

  const currentQuestion = PLANET_QUESTIONS[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / PLANET_QUESTIONS.length) * 100;
  const scorePercentage = Math.round((score / PLANET_QUESTIONS.length) * 100);

  return (
    <main className="min-h-screen bg-space text-white">
      <section className="max-w-4xl mx-auto px-6 py-16">
        {gameState === "start" && (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-wider">Planet Quiz</h1>
              <p className="text-muted text-lg">
                Test your knowledge about planets in our Solar System!
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-lg p-8 space-y-4">
              <p className="text-main">
                {PLANET_QUESTIONS.length} questions about planets
              </p>
              <p className="text-sm text-muted">
                Answer each question by selecting one of the four options.
              </p>
            </div>

            <button
              onClick={startQuiz}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-lg"
            >
              Start Quiz
            </button>
          </div>
        )}

        {gameState === "playing" && (
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted">
                  Question {currentQuestionIndex + 1} of {PLANET_QUESTIONS.length}
                </span>
                <span className="text-sm font-semibold text-orange-400">
                  Score: {score}
                </span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold">{currentQuestion.question}</h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswer === null
                        ? "border-slate-600 hover:border-orange-500 cursor-pointer"
                        : index === currentQuestion.correct
                        ? "border-green-500 bg-green-500/10"
                        : index === selectedAnswer
                        ? "border-red-500 bg-red-500/10"
                        : "border-slate-600 opacity-50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm ${
                          selectedAnswer === null
                            ? "border-slate-400"
                            : index === currentQuestion.correct
                            ? "border-green-500 bg-green-500"
                            : index === selectedAnswer
                            ? "border-red-500"
                            : "border-slate-600"
                        }`}
                      >
                        {index === currentQuestion.correct && selectedAnswer !== null && "✓"}
                        {index === selectedAnswer && selectedAnswer !== currentQuestion.correct && "✗"}
                      </span>
                      {option}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setShowHint(!showHint)}
                  disabled={selectedAnswer !== null}
                  className={`text-sm px-4 py-2 rounded transition-colors ${
                    selectedAnswer !== null
                      ? "opacity-50 cursor-not-allowed text-muted"
                      : "text-orange-400 hover:text-orange-300"
                  }`}
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </button>

                {selectedAnswer !== null && (
                  <span
                    className={`text-sm font-semibold ${
                      selectedAnswer === currentQuestion.correct
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {selectedAnswer === currentQuestion.correct
                      ? "Correct! ✓"
                      : "Incorrect! ✗"}
                  </span>
                )}
              </div>

              {showHint && selectedAnswer === null && (
                <div className="bg-blue-900/30 border border-blue-700 rounded p-4">
                  <p className="text-sm text-blue-200">
                    <strong>Hint:</strong> {currentQuestion.hint}
                  </p>
                </div>
              )}
            </div>

            {selectedAnswer !== null && (
              <button
                onClick={handleNext}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                {currentQuestionIndex === PLANET_QUESTIONS.length - 1
                  ? "See Results"
                  : "Next Question"}
              </button>
            )}
          </div>
        )}

        {gameState === "finished" && (
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-wider">Quiz Complete!</h1>
              <p className="text-muted text-lg">
                Here's how you performed on the planetary knowledge test.
              </p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-lg p-8 space-y-4">
              <div className="text-6xl font-bold text-orange-500">
                {scorePercentage}%
              </div>
              <div className="text-2xl">
                You got {score} out of {PLANET_QUESTIONS.length} correct!
              </div>
              <div className="text-muted">
                {scorePercentage >= 80
                  ? "Outstanding! You're a planetary expert! 🌍"
                  : scorePercentage >= 60
                  ? "Great job! You know a lot about planets! 🚀"
                  : scorePercentage >= 40
                  ? "Good effort! Keep learning about our Solar System! 📚"
                  : "Keep studying! The cosmos has more to teach you! 🌌"}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-700 rounded-lg p-6 text-left space-y-4 max-h-96 overflow-y-auto">
              <h3 className="text-lg font-semibold">Answer Review</h3>
              {answers.map((answer, index) => (
                <div
                  key={index}
                  className={`p-3 rounded border-l-4 ${
                    answer.isCorrect
                      ? "border-green-500 bg-green-500/10"
                      : "border-red-500 bg-red-500/10"
                  }`}
                >
                  <p className="text-sm font-semibold">{answer.question}</p>
                  <p className="text-sm text-muted mt-1">
                    {answer.isCorrect ? (
                      <span className="text-green-400">
                        ✓ Your answer: {PLANET_QUESTIONS[index].options[answer.selected]}
                      </span>
                    ) : (
                      <>
                        <span className="text-red-400 block">
                          ✗ Your answer: {PLANET_QUESTIONS[index].options[answer.selected]}
                        </span>
                        <span className="text-green-400 block">
                          Correct: {PLANET_QUESTIONS[index].options[answer.correct]}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Take Quiz Again
              </button>
              <a
                href="/"
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
