import logo from './logo.svg';
import './App.css';
import EmployeeDirectory from "./components/directory";
import Jumbo from "./components/Jumbo";

function App() {
  return (
    <div className="App">
      <Jumbo/>
      <EmployeeDirectory/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        </a>
      </header>
    </div>
  );
}

export default App;
