import { useContext} from "react";
import CardExercicio from "../cardexercicio/CardExercicio";
import { ExerciciosContext } from "../../../contexts/ExerciciosContext";


function ListarExercicio() {
  const context = useContext(ExerciciosContext)!;
  const { exercicios } = context;
  console.log(exercicios);


  return (
    <>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8 mx-6"
          >
            {exercicios.map((exercicio) => (
              <CardExercicio key={exercicio.id} exercicio={exercicio} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListarExercicio;
