import { useSelector, useDispatch } from "react-redux";
import { actions } from "./store/index";
import "./App.css";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementCount = () => {
    dispatch(actions.incrementCount());
  };

  const decrementCount = () => {
    dispatch(actions.decrementCount());
  };

  const addBy = () => {
    dispatch(actions.addBy(10));
  };
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>

      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
      <button onClick={addBy}>+ 10</button>
    </div>
  );
}

export default App;
