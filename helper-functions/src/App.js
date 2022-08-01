import { useEffect } from "react";
import "./App.css";
import { getUsers } from "./helpers/getAllUsers";
import { addNums, multiplyNums } from "./helpers/addTwo";

function App() {
  const getUsersHelper = async () => {
    let data = await getUsers(`photos`);
    console.log(data);
  };

  const addTwoNumsHelper = () => {
    let sum = addNums(2, 3);
    let multiples = multiplyNums(2, 4);
    console.log(sum);
    console.log(multiples);
  };
  useEffect(() => {
    getUsersHelper();
  }, []);
  return (
    <div className="App">
      <h1>Helper Functions</h1>

      <button onClick={addTwoNumsHelper}>Add</button>
    </div>
  );
}

export default App;
