import React from "react";
import classes from "./listLayout.module.css";
import ListTab from "../UI/tab/listTab.component";

function MyLists() {
    

  return (
    <div className={classes.myLists}>
      <ListTab> 
        <h1> Hoy </h1>
      </ListTab>
      <br/>
      <ListTab>
        <h1> Este Semana </h1>
      </ListTab>
      <br/>
      <ListTab> 
        <h1> Mis Proyectos </h1>
      </ListTab>
      <br/>
      <button title="Añadir Nueva Lista"> Añadir Nueva Lista </button>
    </div>
  );
}

export default MyLists;
