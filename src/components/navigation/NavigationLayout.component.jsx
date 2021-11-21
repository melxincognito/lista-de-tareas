import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationLayout.module.css";
import ListTab from "../UI/tab/listTab.component";

function MainNavigation(props) {
  return (
    <div>
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
              <h2> Añadir Tarea </h2>
            </Link>
          </ListTab>
        </nav>
      </div>
      <div className={classes.content}>
        <div className={classes.todos}>
          <div className={classes.myTodos}>{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
