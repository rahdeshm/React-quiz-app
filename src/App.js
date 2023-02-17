import './App.css';
import AppProvider from './Context/Contex';
import SetupForm from './Form/SetupForm';
import Modal from './Modal/Modal';

function App() {
  return (
    <div className="App">
      <main>
        <section className='mainquiz'>
            <p className='correctanswers'>Correct answers: 3</p>
            <article className='container'>
              <h2>Text</h2>
              <div>q1</div>
              <div>q1</div>
              <div>q1</div>
              <div>q1</div>
            </article>
            <button className='next-question'>Next question</button>
        </section>
      </main>
      <AppProvider/>
    </div>
  );
}

export default App;
