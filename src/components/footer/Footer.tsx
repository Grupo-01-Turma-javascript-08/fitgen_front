import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-6 lg:px-12">
      {/* Seção "Ready to Grow" */}
      

      {/* Linha Separadora */}
      <hr className="border-gray-700 my-8 max-w-6xl mx-auto" />

      {/* Rodapé Inferior */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center text-xl font-bold mb-4 md:mb-0">
          <img src="https://png.pngtree.com/png-clipart/20250605/original/pngtree-fitness-gym-logo-with-dumbbell-lifting-silhouettes-png-image_21126577.png" className="h-8 mr-2" />
          <span>FFL</span>
        </div>
        
        {/* Links de Navegação do Rodapé */}
        <ul className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-4 md:mb-0">
          <div className="flex gap-8 mt-0">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition"><FacebookLogo size={32} weight="fill" /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition"><InstagramLogo size={32} weight="fill" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition"><LinkedinLogo size={32} weight="fill" /></a>
          </div>
        </ul>

        {/* Direitos Autorais */}
        <p className="text-sm text-gray-400">
          Copyright &copy; 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;