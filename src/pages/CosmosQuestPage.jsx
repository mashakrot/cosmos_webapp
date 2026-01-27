import { useState } from "react";
import { solarSystem } from "../data/solarSystem";

import InstructionsModal from "../components/InstructionsModal";
import GameHeader from "../components/GameHeader";
import SolarSystemView from "../components/SolarSystemView";

import PlanetModal from "../components/PlanetQuizModal";
import Quiz from "../components/QuizModal";
import GameWinModal from "../components/GameWinModal";
import GameOverModal from "../components/GameOverModal";


// images
import bobIdle from "../assets/img/Bob/Default.png";
import bobHappy from "../assets/img/Bob/Happy_Mouth_Opened.png";
import bobSad from "../assets/img/Bob/Sad.png";
import bobSurprised from "../assets/img/Bob/Default_Mouth_Opened.png";
import bobCrying from "../assets/img/Bob/Crying.png";


// TODO: Character dialogue reacting to success/fail; Save progress in localStorage
export default function CosmosQuestPage() {
    const [gameStarted, setGameStarted] = useState(true);
    const [activePlanet, setActivePlanet] = useState(null);
    const [clearedPlanets, setClearedPlanets] = useState([]);
    const [lives, setLives] = useState(3);
    const [quizActive, setQuizActive] = useState(false);

    const [showInstructions, setShowInstructions] = useState(true);

    const characterStates = {
        idle: bobIdle,
        happy: bobHappy,
        sad: bobSad,
        surprised: bobSurprised,
        victory: bobHappy,
        gameOver: bobCrying,
    };

    const [characterEmotion, setCharacterEmotion] = useState("idle");



    const sun = solarSystem[0];
    const planets = solarSystem.slice(1);

    const handleQuizPassed = (planetId) => {
        setClearedPlanets((prev) => [...prev, planetId]);
        setQuizActive(false);
        setActivePlanet(null);
        setCharacterEmotion("happy");
        // setTimeout(() => setCharacterEmotion("idle"), 2000);
    };

    const handleQuizFailed = () => {
        setLives((prev) => prev - 1);
        setQuizActive(false);
        setActivePlanet(null);
        setCharacterEmotion("sad");
        // setTimeout(() => setCharacterEmotion("idle"), 2000);
    };

    const handlePlanetClick = (planet) => {
        setActivePlanet(planet);
        setCharacterEmotion("surprised");
        // setTimeout(() => setCharacterEmotion("idle"), 1500);
    };

    const resetGame = () => {
        setLives(3);
        setClearedPlanets([]);
        setGameStarted(true);
        setShowInstructions(false);
        setActivePlanet(null);
        setQuizActive(false);
    };

    const allCleared = clearedPlanets.length === solarSystem.length;
    // const allCleared = clearedPlanets.length === 1;
    const gameOver = lives <= 0;

    const getCharacterEmotion = () => {
        if (quizActive === false && gameOver) return "gameOver";
        if (quizActive === false && allCleared) return "victory";
        return characterEmotion;
    };

    const currentCharacterImg = characterStates[getCharacterEmotion()];

    return (
        <section className="bg-space min-h-screen flex flex-col items-center justify-start text-white py-10">
            <InstructionsModal
                open={gameStarted && showInstructions}
                onClose={() => setShowInstructions(false)}
                characterImg={currentCharacterImg} />

            {gameStarted && !gameOver && !allCleared && (
                <>
                    <GameHeader lives={lives} characterImg={currentCharacterImg} />

                    <SolarSystemView
                        sun={sun}
                        planets={planets}
                        clearedPlanets={clearedPlanets}
                        onSelectPlanet={handlePlanetClick}
                        characterImg={currentCharacterImg} />
                </>
            )}



            {activePlanet && !quizActive && !gameOver && !allCleared && (
                <PlanetModal planet={activePlanet}
                    onClose={() => setActivePlanet(null)}
                    onTakeQuiz={() => setQuizActive(true)}
                    cleared={clearedPlanets.includes(activePlanet.id)} />
            )}

            {quizActive && activePlanet && !gameOver && !allCleared && (
                <Quiz
                    planet={activePlanet}
                    onPass={() => handleQuizPassed(activePlanet.id)}
                    onFail={() => handleQuizFailed()}
                    onExit={() => {
                        setQuizActive(false);
                        setActivePlanet(null);
                        setCharacterEmotion("idle");
                    }}
                    setCharacterEmotion={setCharacterEmotion}
                    lives={lives}
                    characterImg={currentCharacterImg}
                />

            )}


            {gameOver && <GameOverModal onRestart={resetGame} characterImg={currentCharacterImg} />}
            {allCleared && <GameWinModal onRestart={resetGame} characterImg={currentCharacterImg} />}
        </section>
    );
}
