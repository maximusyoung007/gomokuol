import './App.css';
import {Button} from 'antd'
import axios from "axios";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <Button type='primary'>Button</Button>
        </a>
      </header>
    </div>
  );
}

export default App;
