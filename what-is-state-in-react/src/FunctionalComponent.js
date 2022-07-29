import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [array, setArray] = useState([
    {
      name: "Nishant",
      age: 26,
    },
    {
      name: "Uday",
      age: 26,
    },
  ]);
  const [object, setObject] = useState({
    name: "Nishant",
    age: 26,
  });
  const increment = () => {
    setCount(count + 1);

    setIsVisible(!isVisible);
    setName("Nishant");
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <h1>{name}</h1>
      {isVisible ? <h1>Visible</h1> : <h1>Not Visible</h1>}

      <button onClick={increment}>Change States</button>
    </div>
  );
}

export default App;
