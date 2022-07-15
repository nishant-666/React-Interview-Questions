import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  const mapData = () => {
    //Filtering numbers
    let numberLessThan5 = numbers
      .map((filtered) => {
        return filtered * filtered;
      })
      .filter((number) => {
        return number <= 50;
      });
    setNumbers(numberLessThan5);

    //Filtering users
    let filteredData = users.filter((user) => {
      return user.id > 5;
    });
    setUsers(filteredData);
  };
  return (
    <div className="App">
      <h1>Users</h1>
      <div className="card">
        {users.map((user) => (
          <div className="card-inner">
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        ))}
      </div>

      <h1>Numbers</h1>
      <div className="card">
        {numbers.map((number) => (
          <div className="card-inner">{number}</div>
        ))}
      </div>

      <button onClick={mapData}>See Mapped Array</button>
    </div>
  );
}

export default App;
