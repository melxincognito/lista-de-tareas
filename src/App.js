import "./App.css";
import Card from "./components/todos/card/card.component";

function App() {
  function logit() {
    alert("Nos vamos a mudar! Estaremos bien, juntas!:)");
  }

  return (
    <div className="App">
      <header className="App-header">Lista de Tareas</header>
      <div className="content">
        <div className="myLists">
          <h1> Hoy </h1>
          <h1> Este Semana </h1>
          <h1> Mis Proyectos </h1>
          <button title="Añadir Nueva Lista" onClick={logit}>
            {" "}
            Añadir Nueva Lista{" "}
          </button>
        </div>
        <div className="todos">
          <h1> Mi Lista </h1>
          <div className="myTodos">
            <Card/>
            <Card/> 
            <Card/>
            <Card/>
            <div className="addItem">
              <button className="addItemBtn" title="Añadir Nuevo Recuerdo">
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
