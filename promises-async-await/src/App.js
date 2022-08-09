import "./App.css";
import { useEffect } from "react";

function App() {
  const promiseOne = (paramOne) => {
    return new Promise((resolve, reject) => {
      if (paramOne === "Nishant") {
        resolve("Promise Resolved");
      } else {
        reject("Promise Rejected");
      }
    });
  };

  const promiseTwo = (paramTwo) => {
    return new Promise((resolve, reject) => {
      if (paramTwo === "Promise Resolved") {
        resolve("Nishant is a Good Boy");
      } else {
        reject("Nishant is still a Good Boy");
      }
    });
  };

  //Promises
  const promiseMain = () => {
    promiseOne("Nishant")
      .then((fresponse) => {
        console.log(fresponse);
        return promiseTwo(fresponse);
      })
      .then((sresponse) => {
        console.log(sresponse);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //Async Await
  const asyncMain = async () => {
    try {
      let res = await promiseOne("Nishant");
      console.log(res);
      let resTwo = await promiseTwo(res);
      console.log(resTwo);
    } catch {
      console.log("Promise Rejected");
    }
  };
  useEffect(() => {
    promiseMain();
    asyncMain();
  }, []);
  return <div className="App"></div>;
}

export default App;
