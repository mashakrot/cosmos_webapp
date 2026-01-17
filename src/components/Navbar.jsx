import { Link } from "react-router-dom";
import cosmosIcon from "/src/assets/img/cosmos-icon.svg";

export default function Navbar() {
  return (
    <header className="bg-space/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-screen-lg mx-auto py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-accent font-semibold text-xl tracking-wide"
        >
          <img
            src={cosmosIcon}
            alt="Cosmos"
            className="w-10 h-10 border-0"
          />
          Space Today
        </Link>

        {/* Navigation */}
        <nav className="flex gap-14 text-sm text-main tracking-wide">
          <Link to="/apod"   className="border-b-2 border-transparent hover:border-[#ff3b01] transition-colors">
            Picture of the Day
          </Link>
          <Link to="/archive"   className="border-b-2 border-transparent hover:border-[#ff3b01] transition-colors">
            Explore Archive
          </Link>
          <Link to="/mars-weather"   className="border-b-2 border-transparent hover:border-[#ff3b01] transition-colors">
            Mars Weather
          </Link>
        </nav>

      </div>
    </header>
  );
}
