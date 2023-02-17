import React, { useContext } from "react";
import  ReactDOM  from "react-dom";
import { AppContext } from "../Context/Contex";
import './Modal.scss';


const Modal=()=>{
    console.log('modal');
    const{modal,closeModal,correct,questions}=useContext(AppContext)
    return ReactDOM.createPortal( 
        <>
       <h2>hhjkhjn</h2>
       <div className={`${modal? 'modal-container isOpen' :'modal-container'}`}>
            <div className="Model-content">
                <h2>Congrats</h2>
                <p>You answered {((correct/questions.length)*100)}</p>
                <button className="close-btn">Play again</button>
            </div>

        </div>
        </>,document.getElementById("modal")
    )
}

export default Modal