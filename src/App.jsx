import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormTarea from "./components/FormTarea";

function App() {
  return (
    <>
      <main className="container">
        <h1 className="text-center">Bienvenido</h1>
        <h2 className="text-center">Ingresar tareas</h2>
        <FormTarea></FormTarea>
      </main>
    </>
  );
}

export default App;
