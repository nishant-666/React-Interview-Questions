import React from "react";
import "./App.css";

function App() {
  let name = React.createRef();
  let age = React.createRef();
  const getName = (event) => {
    console.log(event.target.value);
  };
  const getAge = (event) => {
    console.log(event.target.value);
  };
  const submit = () => {
    console.log(name.current.value);
    console.log(age.current.value);
  };
  return (
    <div className="App">
      {/* Uncontrolled Components */}
      <input placeholder="Name" ref={name} />
      <input placeholder="Age" ref={age} />

      {/* Controlled Components */}
      <input placeholder="Name" onChange={getName} />
      <input placeholder="Age" onChange={getAge} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default App;
