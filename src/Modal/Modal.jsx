import React from "react";
import './Modal.scss'

const Modal=()=>{

    return(
        <div className="model-container isOpen">
            <div className="Model-content">
                <h2>Congrats</h2>
                <p>You answered n questions correctly</p>
                <button className="close-btn">Play again</button>
            </div>
        </div>
    )
}

export default Modal