import "./App.css";
import Config from "./components/Config";
import Timer from "./components/Timer";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <Config></Config>
      <Timer></Timer>
      <Buttons></Buttons>
    </div>
  );
}

export default App;
