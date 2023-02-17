import React from "react";
import './SetupForm.scss'
const SetupForm=()=>{

    return(
      <main>
         <section className="quiz quiz-small">
            <form className="setup-form">
                <h1>Setup Quiz</h1>
                <div className="form-control">
                    <label htmlFor="amount">Number of questions</label>
                    <input type="number" name="amount" id="amount" className="form-input" min={1} max={50}/>
                </div>

                <div className="form-control">
                     <label htmlFor="category">Category</label>
                     <select name="category" id="category" className="form-input">
                        <option value="sports">sports</option>
                        <option value="history">history</option>
                        <option value="politics">politics</option>
                     </select>
                </div>

                <div className="form-control">
                     <label htmlFor="difficulty">Difficulty</label>
                     <select name="difficulty" id="difficulty" className="form-input">
                        <option value="ease">Ease</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                     </select>
                </div>
                
                <p className="error">Can't generate questions, please try again</p>
                <button type="submit" className="submit-btn">Start</button>

            </form>
         </section>
      </main>
    )
}

export default SetupForm