import React from 'react';
import classes from './overlayModule.module.css';

function Modal() {
    return(
        <div className={classes.modal}> 
            <button className={classes.cancela}>Cancelar</button>
            <button className={classes.btn}>Confirma</button>
        </div>
    )
}

export default Modal;
