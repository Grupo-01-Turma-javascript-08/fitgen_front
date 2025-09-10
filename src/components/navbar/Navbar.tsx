import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#A7402A] bg-opacity-70 backdrop-blur-md text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-orange-500 transition-colors">
          FitGen
        </Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-orange-500 transition-colors">
            Home
          </Link>
          <Link to="/sobre" className="hover:text-orange-500 transition-colors">
            Sobre
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;