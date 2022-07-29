import "./App.css";

function App() {
  const getInput = (event) => {
    console.log(event.target.name);
  };
  const addNums = (num1, num2) => {
    console.log(num1 + num2);
  };
  return (
    <div className="App">
      <input placeholder="Add Something.." onChange={getInput} name="input" />
      <button onClick={() => addNums(2, 3)}>Add Numbers</button>
    </div>
  );
}

export default App;
