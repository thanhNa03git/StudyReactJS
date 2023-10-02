// import logo from "./logo.svg";
import "./App.css";
import Shape from "./Shape";
import Car from "./Car";
import Container from "./Animals";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Shape color="yellow" value="hình tròn" nameColor="vàng" />
        <Car color="yellow"/>
        <Container />
      </header>
    </div>
  );
}

export default App;
