import "./App.css";
// import { add } from "./Math";

function App() {
  const add = () => {
    //Dynamic Import
    import("./Math").then((math) => {
      let sum = math.add(5, 6);
      console.log(sum);
    });
  };
  return (
    <div className="App">
      <button onClick={add}>ADD</button>
    </div>
  );
}

export default App;
