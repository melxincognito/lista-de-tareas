import React from "react";
import classes from "./newTodoForm.module.css";

function NewTodoForm() {
  return (
    <section>
      <form className={classes.form}>
        <div>
          <div className={classes.control}>
            <label htmlFor="title">Título</label>
            <input type="text" required />
          </div>
          <div className={classes.control}>
            <label>Fecha</label>
            <input type="date" required />
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
    </section>
  );
}

export default NewTodoForm;
