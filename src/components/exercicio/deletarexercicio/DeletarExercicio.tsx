import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";
import { ExerciciosContext } from "../../../contexts/ExerciciosContext";

function DeletarExercicio() {
  const navigate = useNavigate();
  const context = useContext(ExerciciosContext)!;
  const { exercicios, deletarExercicio } = context;
  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);


  const { id } = useParams<{ id: string }>();

useEffect(() => {
  if (id !== undefined) {
    const result = exercicios.find((ex) => ex.id === Number(id));
    if (result) setExercicio(result);
  }
}, [id]);

  function hldeletarExercicio() {
    deletarExercicio(Number(id));
    alert("Exercício deletado com sucesso");

    retornar();
  }

  function retornar() {
    navigate("/exercicios");
  }

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-6 font-bold text-[#F03818]">
        Deletar Exercicios
      </h1>
      <p className="text-center font-medium text-[#1A1E23] mb-6">
        Tem certeza de que deseja apagar o exercicio abaixo?
      </p>

      <div className="border border-[#A7402A] flex flex-col rounded-2xl overflow-hidden shadow-md bg-white">
        <header className="py-3 px-6 bg-[#F03818] text-white font-bold text-xl">
          Tipo de exercicio
        </header>
        <p className="p-6 text-xl text-[#F03818] bg-green-50 h-full">
          {exercicio.tipo_exercicio}
        </p>

        <div className="flex">
          <button
            className="w-full py-3 text-white bg-[#1A1E23] hover:bg-[#1A1E23] transition"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full py-3 text-white bg-red-500 hover:bg-red-600 flex items-center justify-center transition"
            onClick={hldeletarExercicio}
          >
            <span>Sim</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarExercicio;
