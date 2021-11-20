import "./App.css";
import Card from "./components/UI/card/card.component";
import NewTodoItem from "./components/todos/new-todo/newTodo.component";
import MyLists from "./components/lists/listLayout.module";
import { React, useState } from "react";
import NewTodoForm from "./components/forms/todos/newTodoForm.component";
import Backdrop from "./components/UI/layout/backdrop.component";

function App() {
  const [showModal, setModalIsOpen] = useState(false);
  function addTodo() {
    setModalIsOpen(true);
  }

  function closeModule() {
    setModalIsOpen(false);
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
              <NewTodoItem
                title="Encontrar Trabajo"
                description="Encontrar trabajo en Madrid creando aplicaciones para el web"
                fecha="03/07/2022"
              />
            </Card>
            <Card>
              <NewTodoItem
                title="Mudanza"
                description="Volvemos a España porque no podemos correr de nuestros problemas para siempre"
                fecha="03/15/2022"
              />
            </Card>
            <div className="addItem">
              <button className="addItemBtn" title="Añadir Nuevo Recuerdo" onClick={addTodo}>
                {" "}
                +{" "}
              </button>
            </div>
            {showModal && <NewTodoForm />}
            {showModal && <Backdrop onClick={closeModule} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
