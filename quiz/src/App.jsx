import './App.css'
import Home from './component/Home'
import Quiz from './component/Quiz'
import Result from './component/Result'
import { useState } from 'react';

function App() {

  const [showHome, setShowHome] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult,setShowResult] = useState(false)

  const startQuiz = () => {
    setShowHome(false);
    setShowQuiz(true);
  };

  const startResult = () => {
    setShowQuiz(false)
    setShowResult(true)
  }

  const startHome = () => {
    setShowResult(false)
    setShowHome(true)
  }

  return (
    <>
      <div className='App'>
        {showHome && <Home startQuiz={startQuiz}/>}
        {showQuiz &&  <Quiz startResult={startResult} />}
        {showResult && <Result startHome={startHome} />}
      </div>
    </>
  )
}

export default App
