import { useState } from "react";
import Child from "./Child";
import "./App.css";

function App() {
  const [name, setName] = useState("Nishant");
  const changeName = (value) => {
    console.log(value);
    setName(value);
  };
  return (
    <div className="App">
      <Child valueOfProps={name} changeName={changeName} />
    </div>
  );
}

export default App;
