import React from "react";
import classes from "./card.module.css";

function Card() {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}> Conseguir Trabajo </h2>
      <p className={classes.description}> Nos vamos a mudar a Madrid juntas </p>
      <p className={classes.fecha}> 03/07/1997 </p>
      <div>
        <input type="checkbox" />
        <label>Terminado </label>
      </div>
    </div>
  );
}

export default Card;
