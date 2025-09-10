function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full p-6 lg:p-10 flex justify-center z-50">
      <div className="flex justify-between items-center w-full max-w-4xl bg-black bg-opacity-10 backdrop-blur-md rounded-full px-5 py-3 border border-white border-opacity-20">
        {/* Logo */}
        <div className="flex items-center text-white text-2xl font-bold">
          <img src="https://png.pngtree.com/png-clipart/20250605/original/pngtree-fitness-gym-logo-with-dumbbell-lifting-silhouettes-png-image_21126577.png" className="h-12 mr-4" />
        </div>
        
        {/* Links de Navegação */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <li><a href="#home" className="hover:text-orange-500 transition-colors">HOME</a></li>
          <li><a href="#about" className="hover:text-orange-500 transition-colors">Sobre nós</a></li>
          <li><a href="#service" className="hover:text-orange-500 transition-colors">Produtos</a></li>
        </ul>
        
        {/* Botão */}
        <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-orange-600 transition-colors">
          Novo Plano
        </button>
      </div>
    </nav>
  );
}

export default Navbar;