import React from 'react';
import classes from './overlayModule.module.css';

function Modal(props) {
    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onConfirm()
    }

    return(
        
        <div className={classes.modal}> 
            <h2> ¿ Seguro? </h2>
            <button className={classes.cancela} onClick={cancelHandler}>Cancelar</button>
            <button className={classes.btn} onClick={confirmHandler}>Confirma</button>
        </div>
    )
}

export default Modal;
