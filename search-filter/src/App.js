import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      const searched = setTimeout(() => {
        setSearched(
          users.filter((user) => {
            return Object.values(user)
              .join("")
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
          })
        );
      }, 500);

      return () => clearTimeout(searched);
    } else {
      setUsers(users);
    }
  }, [searchQuery]);
  return (
    <div className="App">
      <input
        onChange={(event) => setSearch(event.target.value)}
        className="search"
        placeholder="Search Users.."
      />
      <div className="grid-main">
        {searchQuery.length > 0
          ? searched.map((search) => {
              return (
                <div className="grid-child">
                  <h2>{search.name}</h2>
                  <p>{search.username}</p>
                </div>
              );
            })
          : users.map((user) => {
              return (
                <div className="grid-child">
                  <h2>{user.name}</h2>
                  <p>{user.username}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
