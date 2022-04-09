import "./App.css";
import { Counter } from "./components/Counter";
import { Inventory } from "./components/Inventory";

function App() {
  return (
    <div className="App">
      <Inventory />
      <br />
      <Counter />
    </div>
  );
}

export default App;
