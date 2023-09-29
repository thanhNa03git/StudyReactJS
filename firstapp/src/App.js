import logo from "./logo.svg";
import "./App.css";
import Shape from "./Shape";
import Car from "./Car"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Car/>
        <Shape color="red" value="hình vuông" nameColor="đỏ" />
        <Shape color="yellow" value="hình tròn" nameColor="vàng" />
      </header>
    </div>
  );
}

export default App;
