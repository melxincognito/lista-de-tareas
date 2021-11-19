import React from "react";
import Card from "../../UI/card/card.component";
import classes from "./newTodoForm.module.css";
import { useRef } from "react";

function NewTodoForm(props) {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const fechaInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredFecha = fechaInputRef.current.value;

    const todoData = {
      title: enteredTitle,
      description: enteredDescription,
      fecha: enteredFecha,
    };

    props.onAddTodo(todoData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div>
          <div className={classes.control}>
            <label htmlFor="title">Título</label>
            <input type="text" required id='title'/>
          </div>
          <div className={classes.control}>
            <label>Fecha</label>
            <input type="date" required id='fecha'/>
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Resumen</label>
            <textarea id="description" required rows="4" />
          </div>
          <div className={classes.actions}>
            <button> Añadir a mí lista </button>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default NewTodoForm;
