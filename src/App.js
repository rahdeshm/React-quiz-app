import { useContext } from 'react';
import './App.css';
import AppProvider from './Context/Contex';
import SetupForm from './Form/SetupForm';
import Modal from './Modal/Modal';
import { AppContext } from './Context/Contex';
import LoadingScreen from './Loading/LoadingScreen';
function App() {
 const {waiting,loading,questions,index,correct,nextQuestions,checkAnswer}= useContext(AppContext);

 if(waiting){
  return <SetupForm/>
 }
 if(loading){
  return <LoadingScreen/>
 }

 const {incorrect_answers,correct_answer,question}=questions[index];
 let answers=[...incorrect_answers];
 const tempIndex=Math.floor(Math.random()*4);

 if(tempIndex===3){
  answers.push(correct_answer)
 }
 else{
  answers.push(answers[tempIndex]);
  answers[tempIndex]=correct_answer
 }

  return (
    <div className="App">
      {/* <main>
        <section className='mainquiz'>
            <p className='correctanswers'>Correct answers: {correct_answer}/{index}</p>
            <article className='container'>
              <h2>{question}</h2>
              <div>
                {
                  answers.map((answer,index)=>{
                     return <button key={index} className='answer-btn' onClick={()=>checkAnswer(correct_answer===answer)}>{answer}</button>
                  })
                }
              </div>
            </article>
            <button className='next-question' onClick={nextQuestions}>Next question</button>
        </section>
      </main> */}

      <Modal/>
    </div>
  );
}

export default App;
