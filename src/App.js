import './App.css';
import {useEffect} from "react";

const App = () => {

  useEffect(() => {
    fetch('https://about-me.ando-lalaina.ml/')
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);

  return <div>Hello world</div>
}

/*function App() {
  return (
    <div className="App">
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
}*/

export default App;
