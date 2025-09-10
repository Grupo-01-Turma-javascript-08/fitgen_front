import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 lg:p-10 flex justify-center z-50">
      <div className="flex justify-between items-center w-full max-w-4xl bg-black bg-opacity-10 backdrop-blur-md rounded-full px-5 py-3 border border-white border-opacity-20">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold">
          <img
            src="https://png.pngtree.com/png-clipart/20250605/original/pngtree-fitness-gym-logo-with-dumbbell-lifting-silhouettes-png-image_21126577.png"
            className="h-12 mr-4"
            alt="Logo da academia"
          />
        </div>

        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li>
            <Link
              to="/home"
              className="hover:text-orange-500 transition-colors"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/sobre"
              className="hover:text-orange-500 transition-colors"
            >
              Sobre nós
            </Link>
          </li>
          <li>
            <Link
              to="/exercicios"
              className="hover:text-orange-500 transition-colors"
            >
              Exercicios
            </Link>
          </li>
        </ul>

        {/* Botão */}
        <Link
          to="/cadastro"
          className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors"
        >
          Cadastrar Exercício
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
