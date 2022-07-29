import "./App.css";

function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const details = [
    {
      name: "Nishant",
      age: 26,
    },
    {
      name: "Shailesh",
      age: 29,
    },
    {
      name: "Shailesh",
      age: 29,
    },
    {
      name: "Abhishek",
      age: 27,
    },
    {
      name: "Mayank",
      age: 25,
    },
  ];
  return (
    <div className="App">
      <ul>
        {numbers.map((number) => {
          return <li key={number}>{number}</li>;
        })}
      </ul>

      <ul>
        {details.map((detail, index) => {
          return (
            <div key={index}>
              <li>{detail.name}</li>
              <li>{detail.age}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
