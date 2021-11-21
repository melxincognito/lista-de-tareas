import React from "react";
import classes from "./NavigationLayout.module.css";
import ListTab from "../UI/tab/listTab.component";

function MainNavigation(props) {
  return (
    <div>
      <header className={classes.appHeader}>Lista de Tareas</header>
      
        <div className={classes.navigationLayout}>
          <ListTab>
            <h2> Todas Mis Tareas </h2>
          </ListTab>
          <br />
          <ListTab>
            <h2> Tareas Importantes </h2>
          </ListTab>
          <br />
          <ListTab>
            <h2> Añadir Tarea </h2>
          </ListTab>
        </div>
        <div className={classes.content}>
        <div className={classes.todos}>
          <h1> Tareas </h1>
          <div className={classes.myTodos}>
          {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
