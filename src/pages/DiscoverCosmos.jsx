import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { solarSystem } from "../data/solarSystem";
import PlanetModal from "../components/PlanetModal";

import bobHappy from "../assets/img/Bob/Happy_Mouth_Opened.png";
import bobIdle from "../assets/img/Bob/Default.png";


export default function DiscoverCosmos() {
    const [activePlanet, setActivePlanet] = useState(null);

    const sun = solarSystem[0];
    const planets = solarSystem.slice(1);

    const [happy, setHappy] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setHappy((prev) => !prev);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const currentImg = happy ? bobHappy : bobIdle;

    return (
        <section className="bg-space min-h-screen flex justify-center text-white mt-9">
            <div className="max-w-5xl w-full py-2">

                <h1 className="text-3xl font-semibold mb-2">
                    Discover the Cosmos
                </h1>
                <p className="text-muted max-w-xl z-auto mb-6">
                    Explore the Solar System by <br></br>
                    clicking on a planet to reveal
                    interesting facts.
                </p>


                <div className="relative mx-auto aspect-square max-w-[520px]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <button onClick={() => setActivePlanet(sun)}
                            className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                            <img src={sun.image} alt="Sun"
                                className="w-24 sm:w-28 md:w-32 lg:w-36 hover:scale-110 transition border-none" />

                        </button>
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50" >
                            <div
                                className="bg-spaceCard px-3 py-2 rounded-lg shadow-lg text-xs text-white whitespace-nowrap" >
                                Sun
                            </div>
                        </div>
                    </div>

                    {planets.map((planet, index) => (
                        <div key={planet.id}
                            className="absolute inset-0 flex items-center justify-center">
                            <div className="absolute rounded-full border border-white/20 pointer-events-none"
                                style={{
                                    width: planet.orbit * 2,
                                    height: planet.orbit * 2
                                }}
                            />

                            <div className="absolute z-10 group"
                                style={{
                                    transform: `rotate(${index * 98}deg) translateX(${planet.orbit}px)`
                                }} >
                                <button onClick={() => setActivePlanet(planet)} className="block" >
                                    <div style={{ transform: `rotate(-${index * 98}deg)` }}>
                                        <img src={planet.image} alt={planet.name}
                                            style={{
                                                width: planet.size,
                                                height: planet.size,
                                            }}
                                            className="hover:scale-125 transition-transform border-none" />

                                    </div>

                                </button>


                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50" >
                                    <div style={{ transform: `rotate(-${index * 98}deg)` }}
                                        className="bg-spaceCard px-3 py-2 rounded-lg shadow-lg text-xs text-white whitespace-nowrap" >
                                        {planet.name}
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {activePlanet && (
                <PlanetModal
                    planet={activePlanet}
                    onClose={() => setActivePlanet(null)}
                />
            )}

            <NavLink to="/game" >
                <div className="fixed right-15 bottom-12 flex flex-col items-center cursor-pointer">
                    <div className="relative mb-2 bg-spaceCard text-white px-4 py-2 rounded-2xl shadow-lg text-sm max-w-xs text-center">
                        Come play the Cosmos Quest!
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-spaceCard rotate-45"></div>
                    </div>

                    <img src={currentImg} alt="Bob inviting"
                        className="w-32 h-auto animate-bounce-slow hover:scale-105 transition-transform border-none" />
                </div>
            </NavLink>
        </section>
    );
}
