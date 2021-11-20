import { React } from "react";
import { useState } from "react";
import classes from "./newTodo.module.css";
import NewTodoForm from "../../forms/todos/newTodoForm.component";
import Backdrop from "../../UI/layout/backdrop.component";

function NewTodoItem(props) {
  const [showModal, setModalIsOpen] = useState(false);
  function deleteTodo() {
    setModalIsOpen(true);
  }

  function closeModule() {
    setModalIsOpen(false);
  }


  return (
    <div>
      <h2 className={classes.title}> {props.title} </h2>
      <p className={classes.description}> {props.description} </p>
      <p className={classes.fecha}> {props.fecha} </p>
      <div className={classes.actions}>
        <button className="btn" onClick={deleteTodo}>
          Borrar
        </button>
      </div>
      { showModal && <NewTodoForm /> }
      { showModal && <Backdrop onClick={closeModule}/>}
    </div>
  );
}

export default NewTodoItem;