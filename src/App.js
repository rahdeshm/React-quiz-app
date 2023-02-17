import { useContext } from 'react';
import './App.css';
import AppProvider from './Context/Contex';
import SetupForm from './Form/SetupForm';
import Modal from './Modal/Modal';
import { AppContext } from './Context/Contex';
import LoadingScreen from './Loading/LoadingScreen';
function App() {
 const {waiting,loading,questions,index,correct,nextQuestion,checkAnswers}= useContext(AppContext);

//  if(waiting){
//   return <SetupForm/>
//  }
//  if(loading){
//   return <LoadingScreen/>
//  }

//  const {correct_answer,question,incorrect_answers}=questions[index];
//  let answers=[...incorrect_answers];
//  const tempIndex=Math.floor(Math.random()*4);

//  if(tempIndex===3){
//   answers.push(correct_answer)
//  }
//  else{
//   answers.push(answers[tempIndex]);
//   answers[tempIndex]=correct_answer
//  }

  return (
    <div className="App">
      {/* <main>
        <section className='mainquiz'>
            <p className='correctanswers'>Correct answers: {correct}/{index}</p>
            <article className='container'>
              <h2>{question}</h2>
              <div>
                {
                  answers.map((answer,index)=>{
                     return <button key={index} className='answer-btn' onClick={()=>checkAnswers(correct_answer===answer)}>{answer}</button>
                  })
                }
              </div>
            </article>
            <button className='next-question' onClick={nextQuestion}>Next question</button>
        </section>
      </main> */}
      <Modal/>
    </div>
  );
}

export default App;
