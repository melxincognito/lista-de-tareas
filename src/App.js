import "./App.css";
import Card from "./components/todos/card/card.component";
import NewTodoForm from "./components/forms/todos/newTodoForm.component";
import MyLists from "./components/lists/listLayout.module";

function App() {
  

  return (
    <div className="App">
      <header className="App-header">Lista de Tareas</header>
      <div className="content">
        <MyLists />
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
              <NewTodoForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
