import React from "react";
import classes from "./listTab.module.css";

function ListTab(props) {
  return <div className={classes.listTab}>{props.children}</div>;
}

export default ListTab;
