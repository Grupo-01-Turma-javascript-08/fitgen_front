import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 px-6 lg:px-12">
      {/* Seção "Ready to Grow" */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Junte se a nós</h2>
        <p className="text-base md:text-lg mb-6 leading-relaxed">
          Nós acreditamos que o sucesso no fitness vem da consistência e do suporte certo. Nossa missão é oferecer não apenas equipamentos de ponta, mas uma equipe que te ouve, te orienta e celebra suas conquistas. De iniciantes a atletas experientes, temos o plano perfeito para você.
        </p>
        <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors">
          GET STARTED
        </button>
      </div>

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