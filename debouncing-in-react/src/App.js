import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
const pinAPI = `https://api.postalpincode.in/pincode/`;
function App() {
  const [pin, setPin] = useState("");
  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(pinAPI + pin)
        .then((res) => {
          console.log(res.data[0].PostOffice);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);

    return () => {
      clearTimeout(debouncing);
    };
  }, [pin]);
  return (
    <div className="App">
      <input
        onChange={(event) => setPin(event.target.value)}
        placeholder="Enter your Pin-Code"
      />
    </div>
  );
}

export default App;
