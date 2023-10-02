import logo from "./logo.svg";
import "./App.css";
import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
import Message from "./Components/Message";
import Next from "./Components/Next";
import Counter from "./Components/Counter";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentComponent from "./Components/ParentComponent";
import UserGreeting from "./Components/UserGreeting";
function App() {
  return (
    <div className="App">
      <UserGreeting />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Next/> */}
      {/* <Message /> */}
      {/* <Greet name="Denis" heroName="Trader">
        <p>This is children props</p>
      </Greet>
      <Greet name="Jack" heroName="Driver" /> */}
      {/* <Greet name="Deric" heroName="player" />
      <Greet name="Alkem" heroName="Executive" /> */}

      {/* <Welcome name="Jack" heroName="Driver" /> */}
      {/* <Welcome name="Jack" heroName="Driver" />
      <Welcome name="Jack" heroName="Driver" />
      <Welcome name="Jack" heroName="Driver" /> */}
    </div>
  );
}

export default App;
