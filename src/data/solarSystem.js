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
    size: 120,
    orbit: 0,
    description:
      "The Sun is the blazing heart of our solar system, a vast sphere of hot plasma whose gravity binds everything in orbit. Its energy drives planetary climates and makes life on Earth possible.",
    funFact:
      "Every second, the Sun converts about 4 million tons of mass into energy through nuclear fusion."
  },

  {
    id: "mercury",
    name: "Mercury",
    image: mercuryImg,
    size: 48,
    orbit: 80,
    description:
      "Mercury is the smallest planet and the closest to the Sun, a rocky world of extremes where temperatures swing dramatically between day and night.",
    funFact:
      "Mercury has almost no atmosphere, so its surface can reach 430°C during the day and drop to −180°C at night."
  },

  {
    id: "venus",
    name: "Venus",
    image: venusImg,
    size: 58,
    orbit: 110,
    description:
      "Venus is the second planet from the Sun, and our closest planetary neighbor. It's the hottest planet in our solar system, and is sometimes called Earth's twin.",
    funFact:
      "A day on Venus lasts longer than a year—Venus rotates on its axis once every 243 Earth days, while it orbits the Sun in just 225 Earth days."
  },

  {
    id: "earth",
    name: "Earth",
    image: earthImg,
    size: 60,
    orbit: 145,
    description:
      "Earth is a dynamic and living world, shaped by oceans, atmosphere, and geology. It remains the only known planet capable of sustaining complex life.",
    funFact:
      "About 71% of Earth’s surface is covered by water, yet less than 1% is easily accessible fresh water."
  },

  {
    id: "mars",
    name: "Mars",
    image: marsImg,
    size: 60,
    orbit: 185,
    description:
      "Mars is a cold, desert planet marked by ancient river valleys, polar ice caps, and towering volcanoes, hinting at a wetter and warmer past.",
    funFact:
      "Mars hosts Olympus Mons, the tallest volcano in the solar system—nearly three times taller than Mount Everest."
  },

  {
    id: "jupiter",
    name: "Jupiter",
    image: jupiterImg,
    size: 94,
    orbit: 230,
    description:
      "Jupiter is a colossal gas giant whose immense gravity shapes the solar system. Its swirling clouds and powerful storms create a constantly changing atmosphere.",
    funFact:
      "The Great Red Spot is a storm that has raged for at least 300 years and is large enough to swallow Earth."
  },

  {
    id: "saturn",
    name: "Saturn",
    image: saturnImg,
    size: 110,
    orbit: 280,
    description:
      "Saturn is a gas giant distinguished by its spectacular ring system, composed of countless icy particles orbiting in delicate balance.",
    funFact:
      "Saturn’s rings are incredibly thin—despite spanning hundreds of thousands of kilometers, they are only about 10 meters thick."
  },

  {
    id: "uranus",
    name: "Uranus",
    image: uranusImg,
    size: 72,
    orbit: 330,
    description:
      "Uranus is an icy giant with a unique sideways rotation, likely caused by a massive collision early in its history, resulting in extreme seasonal changes.",
    funFact:
      "Uranus experiences seasons that last over 20 Earth years, with parts of the planet plunged into continuous darkness."
  },

  {
    id: "neptune",
    name: "Neptune",
    image: neptuneImg,
    size: 70,
    orbit: 390,
    description:
      "Neptune is a distant, deep-blue world shaped by violent winds and powerful storms, far beyond the warmth of the Sun.",
    funFact:
      "Neptune’s winds can exceed 2,000 km/h, making them the fastest recorded in the solar system."
  }
];
