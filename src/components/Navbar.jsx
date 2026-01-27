import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import cosmosIcon from "/src/assets/img/cosmos-icon.svg";

export default function Navbar() {
  return (
    <header className="bg-space/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-3 text-accent font-semibold text-xl tracking-wide">
          <img
            src={cosmosIcon}
            alt="Cosmos"
            className="w-10 h-10 border-0"/>
          Space Today
        </Link>

        <nav className="flex gap-10 text-sm text-main tracking-wide">
          {/* <NavLink to="/" className={({ isActive }) => `border-b-2 hover:border-[#ff3b01] transition-colors pb-1 ${isActive ? "border-[#ff3b01]" : "border-transparent"}`}>Discover the Cosmos</NavLink> */}
          <NavLink to="/apod" className={({ isActive }) => `border-b-2 hover:border-[#ff3b01] transition-colors pb-1 ${isActive ? "border-[#ff3b01]" : "border-transparent"}`}>Picture of the Day</NavLink>
          <NavLink to="/archive" className={({ isActive }) => `border-b-2 hover:border-[#ff3b01] transition-colors ${isActive ? "border-[#ff3b01]" : "border-transparent"}`}>Explore Archive</NavLink>
          <NavLink to="/mars-weather" className={({ isActive }) => `border-b-2 hover:border-[#ff3b01] transition-colors ${isActive ? "border-[#ff3b01]" : "border-transparent"}`}>Mars Weather</NavLink>
          {/* <NavLink to="/quiz" className={({ isActive }) => `border-b-2 hover:border-[#ff3b01] transition-colors ${isActive ? "border-[#ff3b01]" : "border-transparent"}`}>Quiz</NavLink> */}
          <NavLink to="/game" className={({ isActive }) => `border-b-2 hover:border-[#ff3b01] transition-colors ${isActive ? "border-[#ff3b01]" : "border-transparent"}`}>Play a Game</NavLink>

        </nav>

      </div>
    </header>
  );
}
