import React, { useContext } from "react";
import { AppContext } from "../Context/Contex";
import './SetupForm.scss';


const SetupForm=()=>{
    const{quiz,handleSubmit,handleChange,print,error}= useContext(AppContext);
    // console.log(handleChange,handleSubmit);
    return(
      <main>
         <section className="quiz quiz-small">
            <form className="setup-form" onSubmit={print} >
                <h1>Setup Quiz</h1>
                <div className="form-control">
                    <label htmlFor="amount">Number of questions</label>
                    <input 
                     type="number"
                      name="amount" 
                      id="amount" 
                      value={quiz.amount}
                      onChange={handleChange}
                      className="form-input"
                      min={1}
                      max={50}/>
                </div>

                <div className="form-control">
                     <label htmlFor="category">Category</label>
                     <select name="category" id="category" className="form-input" value={quiz.category} onChange={handleChange}>
                        <option value="sports">sports</option>
                        <option value="history">history</option>
                        <option value="politics">politics</option>
                     </select>
                </div>

                <div className="form-control">
                     <label htmlFor="difficulty">Difficulty</label>
                     <select name="difficulty" id="difficulty" className="form-input" value={quiz.difficulty} onChange={handleChange}>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                     </select>
                </div>
                
               {error && <p className="error">Can't generate questions, please try again</p>}
                <button type="submit" onClick={handleSubmit} className="submit-btn">Start</button>
            </form>
         </section>
      </main>
    )
}

export default SetupForm