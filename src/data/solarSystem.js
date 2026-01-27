import sunDrawing from "/src/assets/img/solar_systems/sun.png";
import mercuryDrawing from "/src/assets/img/solar_systems/mercury.png";
import venusDrawing from "/src/assets/img/solar_systems/venus.png";
import earthDrawing from "/src/assets/img/solar_systems/earth.png";
import marsDrawing from "/src/assets/img/solar_systems/mars.png";

import jupiterDrawing from "/src/assets/img/solar_systems/jupiter.png";
import saturnDrawing from "/src/assets/img/solar_systems/saturn.png";
import uranusDrawing from "/src/assets/img/solar_systems/uranus.png";
import neptuneDrawing from "/src/assets/img/solar_systems/neptune.png";

import sunImg from "/src/assets/img/sun.png";
import mercuryImg from "/src/assets/img/mercury.webp";
import venusImg from "/src/assets/img/venus.png";
import earthImg from "/src/assets/img/earth.webp";
import marsImg from "/src/assets/img/mars.png";

import jupiterImg from "/src/assets/img/jupiter.webp";
import saturnImg from "/src/assets/img/saturn.png";
import uranusImg from "/src/assets/img/uranus.png";
import neptuneImg from "/src/assets/img/neptune.png";

export const solarSystem = [
  {
    id: "sun",
    name: "Sun",
    image: sunImg,
    drawing: sunDrawing,
    size: 120,
    orbit: 0,
    personality: "The Life Giver",
    description:
      "The Sun is the blazing heart of our solar system, a vast sphere of hot plasma whose gravity binds everything in orbit. Its energy drives planetary climates and makes life on Earth possible.",
    funFact:
      "Every second, the Sun converts about 4 million tons of mass into energy through nuclear fusion.",
    comparison:
      "If Earth were a marble, the Sun would be a beach ball.",
  },

  {
    id: "mercury",
    name: "Mercury",
    image: mercuryImg,
    drawing: mercuryDrawing,

    size: 48,
    orbit: 80,
    personality: "The Speedster",
    introQuestion: "What if a planet had no protection from space?",
    description:
      "Mercury is the smallest planet and the closest to the Sun, a rocky world of extremes where temperatures swing dramatically between day and night.",
    funFact:
      "Mercury has almost no atmosphere, so its surface can reach 430°C during the day and drop to -180°C at night.",
    comparison:
      "A year on Mercury lasts just 88 Earth days.",
    quizHint:
      "Mercury’s lack of atmosphere causes its extreme temperature swings."
  },

  {
    id: "venus",
    name: "Venus",
    image: venusImg,
    drawing: venusDrawing,

    size: 58,
    orbit: 110,
    personality: "The Runaway Furnace",
    introQuestion: "How can a planet similar to Earth become so hostile?",
    description:
      "Venus is the second planet from the Sun, and our closest planetary neighbor. It's the hottest planet in our solar system, and is sometimes called Earth's twin.",
    funFact:
      "A day on Venus lasts longer than a year - Venus rotates on its axis once every 243 Earth days, while it orbits the Sun in just 225 Earth days.",
    comparison:
      "Venus is nearly Earth’s twin in size, but completely opposite in climate.",
    quizHint:
      "Venus shows what happens when a greenhouse effect runs out of control."
  },

  {
    id: "earth",
    name: "Earth",
    image: earthImg,
    drawing: earthDrawing,

    size: 60,
    orbit: 145,
    introQuestion: "Why is Earth the only known planet with life?",

    description:
      "Earth is a dynamic and living world, shaped by oceans, atmosphere, and geology. It remains the only known planet capable of sustaining complex life.",
    funFact:
      "About 71% of Earth’s surface is covered by water, yet less than 1% is easily accessible fresh water.",
    comparison:
      "Earth is the only planet known to host oceans on its surface.",
    quizHint:
      "Liquid water is one of Earth’s greatest strengths."
  },

  {
    id: "mars",
    name: "Mars",
    image: marsImg,
    drawing: marsDrawing,

    size: 60,
    orbit: 185,
    introQuestion: "What if a planet once looked like Earth?",

    description:
      "Mars is a cold, desert planet marked by ancient river valleys, polar ice caps, and towering volcanoes, hinting at a wetter and warmer past.",
    funFact:
      "Mars hosts Olympus Mons, the tallest volcano in the solar system - nearly three times taller than Mount Everest.",
    comparison:
      "Olympus Mons is nearly three times taller than Mount Everest.",
    quizHint:
      "Mars may have once had liquid water on its surface."
  },

  {
    id: "jupiter",
    name: "Jupiter",
    image: jupiterImg,
    drawing: jupiterDrawing,

    size: 94,
    orbit: 230,

    personality: "The Guardian Giant",
    introQuestion: "What if one planet could protect the rest?",

    description:
      "Jupiter is a colossal gas giant whose immense gravity shapes the solar system. Its swirling clouds and powerful storms create a constantly changing atmosphere. Jupiter’s massive gravity acts like a cosmic shield, pulling in asteroids that might otherwise threaten inner planets.",
    funFact:
      "The Great Red Spot is a storm that has raged for at least 300 years and is large enough to swallow Earth.",
    comparison:
      "Jupiter could fit over 1,300 Earths inside it.",
    quizHint:
      "Jupiter’s size is its superpower."
  },

  {
    id: "saturn",
    name: "Saturn",
    image: saturnImg,
    drawing: saturnDrawing,

    size: 110,
    orbit: 280,
    introQuestion: "What makes a planet instantly recognizable?",

    description:
      "Saturn is a gas giant distinguished by its spectacular ring system, composed of countless icy particles orbiting in delicate balance.",
    funFact:
      "Saturn’s rings are incredibly thin - despite spanning hundreds of thousands of kilometers, they are only about 10 meters thick.",
    comparison:
      "The rings stretch wider than the distance between Earth and the Moon.",
    quizHint:
      "Saturn stands out because of its spectacular rings."

  },

  {
    id: "uranus",
    name: "Uranus",
    image: uranusImg,
    drawing: uranusDrawing,

    size: 72,
    orbit: 330,
    introQuestion: "What if a planet rolled around the Sun?",

    description:
      "Uranus is an icy giant with a unique sideways rotation, likely caused by a massive collision early in its history, resulting in extreme seasonal changes.",
    funFact:
      "Uranus experiences seasons that last over 20 Earth years, with parts of the planet plunged into continuous darkness.",
    comparison:
      "Uranus spins at a tilt of about 98 degrees.",
    quizHint:
      "Uranus is unique because of its sideways rotation."
  },

  {
    id: "neptune",
    name: "Neptune",
    image: neptuneImg,
    drawing: neptuneDrawing,

    size: 70,
    orbit: 390,
    introQuestion: "How wild can weather get in the outer solar system?",

    description:
      "Neptune is a distant, deep - blue world shaped by violent winds and powerful storms, far beyond the warmth of the Sun.",
    funFact:
      "Neptune’s winds can exceed 2,000 km/h, making them the fastest recorded in the solar system.",
    comparison:
      "Those winds are faster than the speed of sound on Earth.",
    quizHint:
      "Neptune holds the record for fastest planetary winds."
  }
];
