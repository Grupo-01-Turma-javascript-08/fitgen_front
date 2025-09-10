import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/sobre";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { ExerciciosProvider } from "./contexts/ExerciciosContext";
import FormExercicio from "./components/exercicio/formexercicio/FormExercicio";
import DeletarExercicio from "./components/exercicio/deletarexercicio/DeletarExercicio";
import ListarExercicio from "./components/exercicio/listarexercicio/ListarExercicio";

function App() {
  return (
    <ExerciciosProvider>
      <BrowserRouter>
        <Navbar />
        <div className="bg-gray-900 text-white min-h-screen font-sans min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<FormExercicio />} />
            <Route path="/editarexercicio/:id" element={<FormExercicio />} />
            <Route path="/exercicios" element={<ListarExercicio />} />
            <Route
              path="/deletarexercicio/:id"
              element={<DeletarExercicio />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ExerciciosProvider>
  );
}

export default App;
