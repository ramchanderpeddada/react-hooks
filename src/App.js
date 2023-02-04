import logo from "./logo.svg";
import "./App.css";
import Hook from "./useReducHook/Hook";
import Hook1 from "./useStateHook/Hook1";
import Hook2 from "./useRefHook/Hook";

function App() {
  return (
    <div className="App">
      <Hook2 />
      {/* <Hook1 /> */}
      {/* <Hook /> */}
    </div>
  );
}

export default App;
