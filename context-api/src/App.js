import "./App.css";
import { useState } from "react";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { UserData } from "./contexts/GlobalContext";

function App() {
  const [name, setName] = useState("Nishant");
  const [age, setAge] = useState(51);
  return (
    <div className="App">
      <UserData.Provider value={{ name, setName, age }}>
        <Home />
        <Profile />
      </UserData.Provider>
    </div>
  );
}

export default App;
