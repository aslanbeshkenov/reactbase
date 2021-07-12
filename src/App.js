import './App.css';
import Message from './Message';

const myName = "Aslan";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My First React App!
        <Message name={myName} />
      </header>
    </div>
  );
}

export default App;
