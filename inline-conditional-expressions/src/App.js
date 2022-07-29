import "./App.css";
import { useEffect } from "react";

function App() {
  let age = 26;
  let name = "Uday";
  useEffect(() => {
    let age = 28;
    let name = "Uday";

    //Regular if else
    if (age > 26) {
      console.log("You are now old");
    } else if (name === "Nishant" && age === 26) {
      console.log("I am 26 years old");
      console.log("Nishant is my Name");
    } else {
      console.log("Nishant is not my Name");
      console.log("I am less than 26 years old");
    }

    //Inline if else
    age > 26 ? (
      console.log("You are now old") //true
    ) : name === "Nishant" && age === 26 ? (
      //false
      <>
        {console.log("I am 26 years old")}
        {console.log("Nishant is my Name")}
      </>
    ) : (
      //false
      <>
        {console.log("I am less than 26 years old")}
        {console.log("Nishant is not my Name")}
      </>
    );
  }, []);
  return (
    <div className="App">
      {age > 26 ? (
        <h1>You are now old</h1> //false
      ) : name === "Nishant" && age === 26 ? (
        //false
        <>
          <h1>I am 26 years old</h1>
          <h1>Nishant is my Name</h1>
        </>
      ) : (
        //true
        <>
          <h1>I am less than 26 years old</h1>
          <h1>Nishant is not my Name</h1>
        </>
      )}
    </div>
  );
}

export default App;
