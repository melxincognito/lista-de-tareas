import "./App.css";
import Card from "./components/UI/card/card.component";
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
              <NewTodoItem title='Encontrar Trabajo' description='Encontrar trabajo en Madrid creando aplicaciones para el web' fecha='03/07/2022' />
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
