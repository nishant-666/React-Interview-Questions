import React, { Suspense } from "react";
import "./App.css";
// import Lorem from "./Lorem";
// import Home from "./Home";
import Loader from "./Loader";
const Lorem = React.lazy(() => import("./Lorem"));
const Home = React.lazy(() => import("./Home"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Home />
        <Home />
        <Home />
        <Home />
        <Lorem />
      </Suspense>
    </div>
  );
}

export default App;

//Before lazy loading - 419 kB, 141 ms
//After lazy loading - 375 kB, 131 ms
