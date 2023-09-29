import logo from "./logo.svg";
import "./App.css";
import ParentComponent from './ClickMe';
import Shape from "./Shape";
import Car from "./Car"

function App() {
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
          Learn React - Hello world!
        </a>
        <ParentComponent/>
        <Car value="Ford"/>
        <Shape color="red" value="hình vuông đỏ" />
        <Shape color="yellow" value="hình tròn vàng" />
      </header>
    </div>
  );
}

export default App;
