import { React } from "react";
import { useState } from "react";
import classes from "./newTodo.module.css";
import Card from "../UI/card/card.component";
import Modal from "../UI/popupModules/overlayModule.component";
import Backdrop from "../UI/popupModules/backdrop.component";

function NewTodoItem(props) {
  const [showModal, setModalIsOpen] = useState(false);
  function deleteTodo() {
    setModalIsOpen(true);
  }

  function closeModule() {
    setModalIsOpen(false);
  }

  return (
    <Card>
      <h2 className={classes.title}> {props.title} </h2>
      <p className={classes.description}> {props.description} </p>
      <p className={classes.fecha}> {props.fecha} </p>
      <div className={classes.actions}>
        <button className="btn" onClick={deleteTodo}>
          Borrar
        </button>
      </div>
      {showModal && <Modal onCancel={closeModule} onConfirm={closeModule} />}
      {showModal && <Backdrop onClick={closeModule} />}
    </Card>
  );
}

export default NewTodoItem;
