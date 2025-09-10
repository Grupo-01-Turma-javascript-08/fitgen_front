



function Home() {
  return (
    <div className="min-h-screen bg-[#1A1E23] text-white py-12 px-4 flex justify-center items-center">
      <div className="max-w-5xl w-full bg-[#210f0c] rounded-lg shadow-lg p-8 md:p-12">
        {/* Apresentação */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mt-6">
              SUPERE SEUS <br /> LIMITES CONOSCO
            </h1>
            <p className="mt-6 text-base md:text-lg max-w-md mb-4">
              Mais do que uma academia, somos uma comunidade. Junte-se a um ambiente acolhedor e motivador, onde cada membro se sente parte de uma equipe. Nossos programas de alta qualidade são criados para todos.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.-8l0gVPS6Y6CKQSZOJzZywHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="Foto academia"
              className="rounded-xl w-60 h-60 md:w-72 md:h-72 lg:w-64 lg:h-64 object-cover shadow-lg"
            />
          </div>
        </section>

        {/* Rotina de Treino */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#F03818] mb-4">Rotina de Treino</h2>
            <ul className="list-disc pl-6 text-lg space-y-2 text-white/90 leading-relaxed">
              <li>Segunda: Peito e Tríceps</li>
              <li>Terça: Costas e Bíceps</li>
              <li>Quarta: Pernas e Abdômen</li>
              <li>Quinta: Ombro e Cardio</li>
              <li>Sexta: Full Body</li>
              <li>Sábado: Aula em grupo (Funcional, HIIT, Yoga...)</li>
              <li>Domingo: Descanso ou Atividade Leve</li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <img
              src="/public/treino.jpg"
              alt="Rotina de treino"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Benefícios */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md order-2 md:order-1">
            <img
              src="/public/beneficios.jpg"
              alt="Benefícios do treino"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-[#F03818] mb-4">Benefícios do Treino</h2>
            <ul className="list-disc pl-6 text-lg space-y-2 text-white/90 leading-relaxed">
              <li>Ganho de força e massa muscular</li>
              <li>Melhora do condicionamento físico</li>
              <li>Redução do estresse e ansiedade</li>
              <li>Mais disposição e energia no dia a dia</li>
              <li>Prevenção de doenças e lesões</li>
              <li>Convívio social e motivação em grupo</li>
            </ul>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#F03818] mb-4">Depoimentos</h2>
            <ul className="space-y-4 text-white/90 text-lg">
              <li>“A FitGen mudou minha vida! Os treinos são dinâmicos e a equipe é incrível.”</li>
              <li>“Nunca me senti tão motivado a treinar. Recomendo para todos!”</li>
              <li>“A estrutura e o acompanhamento são diferenciados. Me sinto parte de uma família.”</li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <img
              src="/public/depoimento.jpg"
              alt="Depoimentos de alunos"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Chamada para ação */}
        <div className="bg-orange-100 text-center mx-auto pt-10 pb-5 mt-12 rounded-lg">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#210f0c]">Junte-se à nossa comunidade!</h2>
          <p className="text-base md:text-lg mb-6 leading-relaxed text-[#210f0c]">
            Venha treinar com a gente e descubra o seu melhor! Planos para todos os perfis, com acompanhamento profissional e ambiente acolhedor.
          </p>
          <button className="bg-orange-500 text-black font-semibold py-3 px-8 rounded-full hover:bg-orange-600 transition-colors mb-5">
            Quero começar agora
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;