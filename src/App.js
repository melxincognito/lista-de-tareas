import "./App.css";
import Card from "./components/todos/card/card.component";
import NewTodoItem from "./components/todos/new-todo/newTodo.component";
import MyLists from "./components/lists/listLayout.module";

function App() {
  function tali() {
    alert('puta');
  }
  

  return (
    <div className="App">
      <header className="App-header">Lista de Tareas</header>
      <div className="content">
        <MyLists />
        <div className="todos">
          <h1> Mi Lista </h1>
          <div className="myTodos">
            <Card>
              <NewTodoItem />
            </Card>
            <Card>
              <NewTodoItem />
            </Card>
            <div className="addItem">
              <button className="addItemBtn" title="Añadir Nuevo Recuerdo" onClick={tali}>
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
