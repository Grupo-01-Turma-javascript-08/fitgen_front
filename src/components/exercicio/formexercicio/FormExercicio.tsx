import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Exercicio from "../../../models/Exercicio";
import { ExerciciosContext } from "../../../contexts/ExerciciosContext";

function FormExercicio() {
  const navigate = useNavigate();
  const context = useContext(ExerciciosContext)!;
  const { exercicios, cadastrarExercicio, atualizarExercicio } = context;

  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id !== undefined) {
      const result = exercicios.find((ex) => ex.id === Number(id));
      console.log(result);
      if (result) setExercicio(result);
    }
  }, [id]);

  console.log(exercicio);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setExercicio({
      ...exercicio,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/exercicios");
  }

  function gerarNovoExercicio(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const { id, tipo_exercicio, repeticoes, treino } = exercicio;

    if (id !== undefined) {
      atualizarExercicio(id, tipo_exercicio, repeticoes, treino);
      alert("Exercício atualizado com sucesso!");
    } else {
      cadastrarExercicio(tipo_exercicio, repeticoes, treino);
      
      alert("Exercício cadastrado com sucesso!");
    }
    retornar();
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="text-4xl text-[#F03818] font-bold text-center my-8">
        {id === undefined ? "Cadastrar Exercício" : "Editar Exercício"}
      </h1>

      <form
        className="w-1/2 flex flex-col gap-6 bg-white shadow-md rounded-xl p-6"
        onSubmit={gerarNovoExercicio}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="tipo_exercicio"
            className="text-[#F03818] font-medium"
          >
            Tipo de exercício
          </label>
          <input
            type="text"
            placeholder="Descreva o nome do exercício"
            name="tipo_exercicio"
            className=" text-black border-2 border-[#A7402A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F03818]"
            value={exercicio.tipo_exercicio}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="repeticoes"
            className="text-[#A7402A] font-medium color"
          >
            Repetições
          </label>
          <input
            type="number"
            placeholder="Descreva a quantidade de repetições"
            name="repeticoes"
            className="border-2 border-[#A7402A] text-black rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F03818]"
            value={exercicio.repeticoes}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="treino" className="text-[#A7402A] font-medium">
            Treino
          </label>
          <input
            type="text"
            placeholder="Descreva o treino"
            name="treino"
            className="text-black border-2 border-[#A7402A] rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#F03818]"
            value={exercicio.treino}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <button
          className="rounded-lg text-white bg-[#A7402A] hover:bg-[#A7402A] w-1/2 py-2 mx-auto flex justify-center shadow-md transition"
          type="submit"
        >
          <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
        </button>
      </form>
    </div>
  );
}

export default FormExercicio;
