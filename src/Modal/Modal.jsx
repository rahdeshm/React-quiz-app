import React, { useContext } from "react";
import  ReactDOM  from "react-dom";
import { AppContext } from "../Context/Contex";
import './Modal.scss';


const Modal=()=>{
    console.log('modal');
    const{modal,closeModal,correct,questions}=useContext(AppContext);
    console.log(correct,questions.length);
    return ReactDOM.createPortal( 
        <div className='modal-container'>
     
            <div className="Model-content">
                <h2>Congrats corrrect is {correct}/{questions.length}</h2>
                <p class='paragraph'>You answered {((correct/questions.length)*100)}</p>
                <button className="close-btn" onClick={()=>closeModal(false)}> Play again</button>
            </div>
        </div>
      
       ,document.getElementById("modal")
    )
   
}

export default Modal