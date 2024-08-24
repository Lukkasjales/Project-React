import './App.css';
import LearningTypeProps from './components/LearningTypeProps';
import Event from './components/Event';
import Form from './components/Form';
import PracticeuseState from './components/PracticeuseState';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LearningTypeProps name="Lucas" age={12}></LearningTypeProps>
        <Event digit={1} />
        <Event digit={2} />
        <Form />
        <PracticeuseState></PracticeuseState>
      </header>
    </div>
  );
}

export default App
