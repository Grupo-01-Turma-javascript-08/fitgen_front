import { Link } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";

interface CardExercicioProps {
  exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExercicioProps) {
  return (
    <div className="border border-[#210f0c] flex flex-col rounded-2xl overflow-hidden shadow-lg bg-white transition hover:shadow-xl">
      <header className="py-3 px-6 bg-[#F03818] text-white font-bold text-xl">
        Exercicio
      </header>

      <div className="flex flex-col gap-4 p-6 bg-green-50 text-[#A7402A]">
        <div>
          <span className="block text-sm font-semibold text-[#1A1E23]">
            Tipo de exercício
          </span>
          <p className="text-2xl font-bold">{exercicio.tipo_exercicio}</p>
        </div>
        <div>
          <span className="block text-sm font-semibold text-[#1A1E23]">
            Repetições
          </span>
          <p className="text-2xl font-bold">{exercicio.repeticoes}</p>
        </div>
        <div>
          <span className="block text-sm font-semibold text-[#1A1E23]">
            Treino
          </span>
          <p className="text-2xl font-bold">{exercicio.treino}</p>
        </div>
      </div>
      <div className="flex divide-x divide-white">
        <Link
          to={`/editarexercicio/${exercicio.id}`}
          className="w-full bg-[#F03818] hover:bg-[#F03818] text-white flex items-center justify-center py-3 font-medium transition"
        >
          Editar
        </Link>

        <Link
          to={`/deletarexercicio/${exercicio.id}`}
          className="w-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center py-3 font-medium transition"
        >
          Deletar
        </Link>
      </div>
    </div>
  );
}

export default CardExercicio;
