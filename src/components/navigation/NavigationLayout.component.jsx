import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationLayout.module.css";
import ListTab from "../UI/tab/listTab.component";
import { useState } from 'react';
import NewTodoForm from "../forms/todos/newTodoForm.component";
import Backdrop from "../UI/popupModules/backdrop.component";

function MainNavigation(props) {

  const [showModal, setModalIsOpen] = useState(false);
  function openNewTodo() {
    setModalIsOpen(true);
  }

  function closeModule() {
    setModalIsOpen(false);
  }

  return (
    <div className={classes.appLayout}>
      <header className={classes.appHeader}>Lista de Tareas</header>

      <div>
        <nav className={classes.navigationLayout}>
          <ListTab>
            <Link to="/">
              <h2>Todos Mis Tareas </h2>
            </Link>
          </ListTab>

          <br />
          <ListTab>
            <Link to="/tareasImportantes">
              <h2>Tareas Importantes </h2>
            </Link>
          </ListTab>

          <br />
          <ListTab>
            <Link to="/añadirTarea">
              <h2 onClick={openNewTodo}> Añadir Tarea </h2>
            </Link>
          </ListTab>
        </nav>
      </div>
      <div className={classes.content}>
        <div className={classes.todos}>
          <div>{props.children}</div>
        </div>
      </div>
      {showModal && <NewTodoForm />}
      {showModal && <Backdrop onClick={closeModule} />}

    </div>
  );
}

export default MainNavigation;
