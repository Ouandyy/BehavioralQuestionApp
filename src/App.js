import './App.css';
import questions from './questions'
import {useState, useEffect} from 'react';
import StarMethod from './StarMethod';
import {createUseStyles} from 'react-jss'
import Timer from './Time';

const useStyles = createUseStyles({
  app: {
    textAlign: 'center',
    position: 'relative'
  },
  '@global': {
    scrollBehavior: 'smooth !important',
  }
})


function App() {
  const classes = useStyles();
  const [question, setQuestion] = useState({
    type: '',
    questions: '',
    definition: '',
    explanation: ''
  });
  const [randomInd, setRandomInd] = useState(0)
  const [showType, setShowType] = useState(false);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const getRandomQuestion = () => {
    let randomQuestion = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomQuestion]);
    setShowType(false);
    setShowDefinition(false);
    setShowExplanation(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  const showTypeOnClick = () => {
    setShowType(true);
  };
  const showDefinitionOnClick = () => {
    setShowDefinition(true);
  };
  const showExplanationOnClick = () => {
    setShowExplanation(true);
  };

  useEffect(() => {
    getRandomQuestion()
  }, []);

  useEffect(() => {
    setRandomInd(Math.floor(Math.random() * question.questions.length))
  }, [question])




  console.log(questions)
  return (
    <div className={classes.app}>
      <h1>Practice questions for amazon</h1>
      <div>
        <div>
        <p><strong>Type:</strong> {showType ? question.type : <button onClick={showTypeOnClick}>show</button>}</p>
        {question.definition ? <p><strong>definition:</strong> {showDefinition ? question.definition : <button onClick={showDefinitionOnClick}>show</button>}</p> : null}
        {question.explanation ? <p> <strong>explanation:</strong> {showExplanation ? question.explanation : <button onClick={showExplanationOnClick}>show</button>}</p> : null}
        </div>
        <h3>Q: {question.questions[randomInd]}</h3>
      </div>
      <StarMethod obj={question}/>
      <button onClick={getRandomQuestion}>Next</button>
      <Timer question={question}/>
    </div>
  );
}

export default App;
