function Home() {
  return (
    <section 
      className="relative h-screen w-full flex items-center bg-gray-950 text-white 
                 bg-[url('/src/assets/background.jpg')] bg-cover bg-center"
    >
      {/* Overlay escuro para dar contraste ao texto */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 p-12 lg:p-24 max-w-2xl">
        {/* Título e Subtítulo */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          PUSH YOUR <br /> LIMITS WITH US
        </h1>
        <p className="mt-6 text-base md:text-lg max-w-md">
           Mais do que uma academia, somos uma comunidade. Junte-se a um ambiente acolhedor e motivador, onde cada membro se sente parte de uma equipe. Nossos programas de alta qualidade são criados para todos.
        </p>

        {/* Botões de Ação */}
        <div className="flex items-center gap-4 md:gap-6 mt-8">
          <button className="bg-orange-500 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors">
            JOIN NOW
          </button>
        </div>

        {/* Tags de Serviço */}
        <div className="flex flex-wrap gap-2 mt-12">
          <span className="bg-white bg-opacity-10 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-full border border-white border-opacity-20">PERSONAL TRAINING</span>
          <span className="bg-white bg-opacity-10 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-full border border-white border-opacity-20">STRENGTH</span>
          <span className="bg-white bg-opacity-10 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-full border border-white border-opacity-20">GROUP CLASSES</span>
          <span className="bg-white bg-opacity-10 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-full border border-white border-opacity-20">SWIMMING</span>
          <span className="bg-white bg-opacity-10 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-full border border-white border-opacity-20">CARDIO EQUIPMENT</span>
          <span className="bg-white bg-opacity-10 backdrop-blur-sm text-white text-sm font-medium py-2 px-4 rounded-full border border-white border-opacity-20">FUNCTIONAL WORK</span>
        </div>
      </div>
    </section>
  );
}

export default Home;