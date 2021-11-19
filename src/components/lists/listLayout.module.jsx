import React from "react";
import classes from "./listLayout.module.css";

function MyLists() {
  return (
    <div className={classes.myLists}>
      <h1> Hoy </h1>
      <h1> Este Semana </h1>
      <h1> Mis Proyectos </h1>
      <button title="Añadir Nueva Lista"> Añadir Nueva Lista </button>
    </div>
  );
}

export default MyLists;
