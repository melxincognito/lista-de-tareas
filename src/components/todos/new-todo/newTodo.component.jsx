import React from "react";
import classes from "./newTodo.module.css";


function NewTodoItem(props) {
   

  return (
    <div>
      <h2 className={classes.title}> {props.title} </h2>
      <p className={classes.description}> {props.description} </p>
      <p className={classes.fecha}> {props.fecha} </p>
      <div>
        <input type="checkbox" />
        <label>Terminado</label>
      </div>
    </div>
  );
}

export default NewTodoItem;
