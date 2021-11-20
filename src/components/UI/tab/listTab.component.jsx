import React from "react";
import classes from "./listTab.module.css";

function ListTab(props) {
  function makeAlert() {
    alert('hola')
  }
  return <div className={classes.listTab} onClick={makeAlert}>{props.children}</div>;
}

export default ListTab;
