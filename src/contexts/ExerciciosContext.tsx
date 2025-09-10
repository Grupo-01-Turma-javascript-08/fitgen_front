import { createContext, useState, useCallback, type ReactNode } from "react";
import type Exercicio from "../models/Exercicio";

interface ExerciciosContextType {
  exercicios: Exercicio[];
  cadastrarExercicio: (
    tipo_exercicio: string,
    repeticoes: number,
    treino: string
  ) => void;
  atualizarExercicio: (
    id: number,
    tipo_exercicio?: string,
    repeticoes?: number,
    treino?: string
  ) => void;
  deletarExercicio: (id: number) => void;
}

interface ExerciciosProviderProps {
  children: ReactNode;
}

// Criando o contexto
export const ExerciciosContext = createContext<
  ExerciciosContextType | undefined
>(undefined);

// Provider (componente React)
export function ExerciciosProvider({ children }: ExerciciosProviderProps) {
  const [exercicios, setExercicios] = useState<Exercicio[]>([
    { id: 1, tipo_exercicio: "Supino Reto", repeticoes: 10, treino: "Peito" },
    {
      id: 2,
      tipo_exercicio: "Agachamento Livre",
      repeticoes: 12,
      treino: "Pernas",
    },
    { id: 3, tipo_exercicio: "Rosca Direta", repeticoes: 15, treino: "Braços" },
    {
      id: 4,
      tipo_exercicio: "Remada Curvada",
      repeticoes: 10,
      treino: "Costas",
    },
    {
      id: 5,
      tipo_exercicio: "Desenvolvimento com Halteres",
      repeticoes: 12,
      treino: "Ombros",
    },
    {
      id: 6,
      tipo_exercicio: "Puxada na Frente",
      repeticoes: 10,
      treino: "Costas",
    },
    { id: 7, tipo_exercicio: "Leg Press", repeticoes: 12, treino: "Pernas" },
    {
      id: 8,
      tipo_exercicio: "Tríceps Corda",
      repeticoes: 15,
      treino: "Braços",
    },
    {
      id: 9,
      tipo_exercicio: "Elevação Lateral",
      repeticoes: 12,
      treino: "Ombros",
    },
    { id: 10, tipo_exercicio: "Afundo", repeticoes: 10, treino: "Pernas" },
  ]);
  const [idImplement, setIdImplement] = useState(1);

  const cadastrarExercicio = useCallback(
    (tipo_exercicio: string, repeticoes: number, treino: string) => {
      const novoExercicio: Exercicio = {
        id: idImplement,
        tipo_exercicio,
        repeticoes,
        treino,
      };
      setExercicios((prev) => [...prev, novoExercicio]);
      setIdImplement((prev) => prev + 1);
    },
    [idImplement]
  );

  const atualizarExercicio = useCallback(
    (
      id: number,
      tipo_exercicio?: string,
      repeticoes?: number,
      treino?: string
    ) => {
      setExercicios((prev) =>
        prev.map((ex) =>
          ex.id === id
            ? {
                ...ex,
                tipo_exercicio: tipo_exercicio ?? ex.tipo_exercicio,
                repeticoes: repeticoes ?? ex.repeticoes,
                treino: treino ?? ex.treino,
              }
            : ex
        )
      );
    },
    []
  );

  const deletarExercicio = useCallback((id: number) => {
    setExercicios((prev) => prev.filter((ex) => ex.id !== id));
  }, []);

  return (
    <ExerciciosContext.Provider
      value={{
        exercicios,
        cadastrarExercicio,
        atualizarExercicio,
        deletarExercicio,
      }}
    >
      {children}
    </ExerciciosContext.Provider>
  );
}
