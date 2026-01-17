import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Apod from "./pages/Apod";
import ApodArchive from "./pages/ApodArchive";
import MarsWeather from "./pages/MarsWeather";

export default function App() {
  return (
    <div className="font-orbitron bg-space min-h-screen text-white mx-auto px-6 py-6">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apod" element={<Apod />} />
        <Route path="/archive" element={<ApodArchive />} />
        <Route path="/mars-weather" element={<MarsWeather />} />
      </Routes>    </div>
  );
}
