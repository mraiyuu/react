import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Next from "./Components/Next";
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Next/> */}
      {/* <Message /> */}
      <Greet name="Denis" heroName="Trader">
        <p>This is children props</p>
      </Greet>
      <Greet name="Jack" heroName="Driver" />
      {/* <Greet name="Deric" heroName="player" />
      <Greet name="Alkem" heroName="Executive" /> */}

      <Welcome name="Jack" heroName="Driver" />
      {/* <Welcome name="Jack" heroName="Driver" />
      <Welcome name="Jack" heroName="Driver" />
      <Welcome name="Jack" heroName="Driver" /> */}
    </div>
  );
}

export default App;
