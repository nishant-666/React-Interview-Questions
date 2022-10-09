import { useState, useEffect } from "react";
import { getData } from "./api";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    return () => {
      getData("users");

      getData("posts");

      getData("photos");
    };
  }, []);

  return (
    <div className="App">
      {counter}
      <div>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
}

export default App;
