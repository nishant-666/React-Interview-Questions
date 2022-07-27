import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  //Post Request
  const postData = () => {
    axios
      .post("https://62de906f976ae7460bdd024e.mockapi.io/users", {
        name: name,
        age: 26,
        hobbies: ["Poetry", "Cooking", "Travelling", "Coding", "Piano"],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  //PUT Request
  const updateData = (id) => {
    axios
      .put(`https://62de906f976ae7460bdd024e.mockapi.io/users/${id}`, {
        name: name,
        age: 27,
        hobbies: [
          "Poetry",
          "Cooking",
          "Travelling",
          "Coding",
          "Piano",
          "Sleeping",
        ],
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  //DELETE METHOD
  const deleteData = (id) => {
    axios
      .delete(`https://62de906f976ae7460bdd024e.mockapi.io/users/${id}`)
      .then((res) => {
        getData();
      })
      .catch((err) => {
        console.err(err);
      });
  };

  //GET Request
  const getData = () => {
    axios
      .get("https://62de906f976ae7460bdd024e.mockapi.io/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.err(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick={postData}>POST Data</button>

      {users.map((user) => {
        return (
          <>
            <h2>{`${user.id}. ${user.name}`}</h2>
            <button onClick={() => updateData(user.id)}>Update</button>
            <button onClick={() => deleteData(user.id)}>Delete</button>
          </>
        );
      })}
    </div>
  );
}

export default App;
