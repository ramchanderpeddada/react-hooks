import { useState } from "react";

export default function Hook1() {
  const [state, setState] = useState({
    count: 0,
    incrementBy: 1,
  });
  const handleIncrement = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count + prevState.incrementBy,
    }));
  };
  const handleDecrement = () => {
    setState((prevState) => ({
      ...prevState,
      count: prevState.count - prevState.incrementBy,
    }));
  };
  const handleIncByChange = (e) => {
    setState({
      ...state,
      incrementBy: parseInt(e.target.value, 10),
    });
  };
  return (
    <>
      <p>You clicked {state.count} times</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        type="number"
        onChange={handleIncByChange}
        value={state.incrementBy}
      />
    </>
  );
}
