import "./App.css";
import { useEffect } from "react";

function App() {
  const mainFn = (array) => {
    let [add, substract, multiply] = array;
    console.log([add, substract, multiply]);
  };
  function add(a, b) {
    return a + b;
  }

  function substract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }
  useEffect(() => {
    mainFn([add(2, 3), substract(2, 3), multiply(2, 3)]);
  }, []);
  return (
    <div className="App">
      <h1>
        Write a function which takes an array of multiple functions and executes
        them one by one, in left to right manner.
      </h1>

      <h1> - By Zomato</h1>
    </div>
  );
}

export default App;
