import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideDecoration from "./components/SideDecoration";
import Home from "./pages/Home";
import DiscoverCosmos from "./pages/DiscoverCosmos";
import Apod from "./pages/Apod";
import ApodArchive from "./pages/ApodArchive";
import MarsWeather from "./pages/MarsWeather";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <div className="font-orbitron bg-space min-h-screen text-white mx-auto px-6 py-6">
      <Navbar />
      <SideDecoration />

      <Routes>
        <Route path="/" element={<DiscoverCosmos />} />
        {/* <Route path="/discover-cosmos" element={<DiscoverCosmos  />} /> */}
        <Route path="/apod" element={<Apod />} />
        <Route path="/archive" element={<ApodArchive />} />
        <Route path="/mars-weather" element={<MarsWeather />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>    </div>
  );
}
