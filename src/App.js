import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Lista de Tareas</header>
      <div className="content">
        <div className="myLists">
          <h1> Hoy </h1>
          <h1> Este Semana </h1>
          <h1> Mis Proyectos </h1>
          <button> Añadir Nueva Lista </button>
        </div>
        <div className="todos">
          <h1> Mi Lista </h1>
          <div className="myTodos">
            <div className="card">
              <h2 className="title"> Conseguir Trabajo en Madrid </h2>
              <p className="description"> Nos vamos a mudar juntas </p>
              <div>
                <input type="checkbox" />
                <label>Terminado </label>
              </div>
            </div>
            <div className="card">
              <h2 className="title"> Titulo </h2>
              <p className="description"> Haz esto</p>
              <div>
                <input type="checkbox" />
                <label>Terminado </label>
              </div>
            </div>
            <div className="card">
              <h2 className="title"> Titulo </h2>
              <p className="description"> Haz esto</p>
              <div>
                <input type="checkbox" />
                <label>Terminado </label>
              </div>
            </div>
            <div className="card">
              <h2 className="title"> Titulo </h2>
              <p className="description"> Haz esto</p>
              <div>
                <input type="checkbox" />
                <label>Terminado </label>
              </div>
            </div>
            <div className="card">
              <h2 className="title"> Titulo </h2>
              <p className="description"> Haz esto</p>
              <div>
                <input type="checkbox" />
                <label>Terminado </label>
              </div>
            </div>
            <div className="addItem">
              <button className="addItemBtn" title='Añadir Nuevo Recuerdo'>  +  </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
