import React from "react";
import "./App.css";
import ReactQuill from "react-quill"; // ES6
import "react-quill/dist/quill.snow.css";
function App() {
  const [quill, setQuill] = React.useState("");

  //HTML
  let data = `<p style="font-size: 25px; color: red">This is my Home</p>`;
  let data2 = `<b style="font-size: 25px; color: blue">This is my Home</b>`;
  const getQuillData = (value) => {
    setQuill(value);
  };
  console.log(quill);
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: quill }}></div>
      {/* JSX */}
      {/* <p style={{ fontSize: 25, color: "red" }}>This is my Home</p> */}

      <ReactQuill onChange={getQuillData} />
    </div>
  );
}

export default App;
