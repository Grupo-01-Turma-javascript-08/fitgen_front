function Sobre() {
  return (
    <div className="min-h-screen bg-[#1A1E23] text-white py-24 px-6 font-sans flex justify-center items-center">
      <div className="max-w-6xl w-full bg-[#210f0c] rounded-lg shadow-lg p-12">
        <h1 className="text-5xl font-extrabold text-[#F03818] mb-12 text-center drop-shadow-md">
          Sobre a FitGen
        </h1>

        {/* Missão */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#A7402A] mb-4">Missão</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Oferecer soluções inteligentes e acessíveis para o mundo fitness,
              conectando professores e alunos por meio de tecnologia e inteligência
              artificial, com foco em saúde, desempenho e personalização.
            </p>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <img
              src="./public/inovacao.png"
              alt="Missão FitGen"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Visão */}
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2 order-2 md:order-1 rounded-lg overflow-hidden shadow-md">
            <img
              src="./public/fitgen.jpg"
              alt="Visão FitGen"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl font-semibold text-[#A7402A] mb-4">Visão</h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Ser a plataforma referência em gestão de treinos e exercícios
              personalizados, promovendo uma experiência eficiente, prática e
              humanizada para academias, profissionais de educação física e alunos.
            </p>
          </div>
        </section>

        
        <section className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#A7402A] mb-4">Valores</h2>
            <ul className="list-disc pl-6 text-lg space-y-2 text-white/90 leading-relaxed">
              <li>Inovação e tecnologia a serviço da saúde</li>
              <li>Compromisso com a evolução dos usuários</li>
              <li>Ética, transparência e responsabilidade</li>
              <li>Foco na experiência e nos resultados</li>
              <li>Inclusão e acessibilidade digital</li>
            </ul>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">
            <img
              src="./public/personal.jpg"
              alt="Valores FitGen"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Diferenciais */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md">

            <img src="./public/gym.jpg" alt="Academia" className="w-full h-auto" />

          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold text-[#A7402A] mb-4">
              Diferenciais
            </h2>
            <ul className="list-disc pl-6 text-lg space-y-2 text-white/90 leading-relaxed">
              <li>
                Treinos personalizados com base nas metas, histórico e nível do
                aluno
              </li>
              <li>Integração entre professores e alunos em tempo real</li>
              <li>
                Cadastro, edição e exclusão de treinos, exercícios e perfis de
                usuário
              </li>
              <li>Listagem completa de exercícios disponíveis na plataforma</li>
              <li>Interface intuitiva, responsiva e fácil de usar</li>
              <li>
                Acompanhamento de desempenho e ajustes contínuos dos treinos
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Sobre;
