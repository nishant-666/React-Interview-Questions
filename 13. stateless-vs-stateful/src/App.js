import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Nishant");
  return (
    <div className="App">
      <h1>{name}</h1>
    </div>
  );
}

export default App;

//Stateless === No states

//Stateful === With states

//16.8
