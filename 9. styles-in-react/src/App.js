import React from "react";
import "./App.css";

const styles = {
  internal: {
    color: "blue",
  },
  light: {
    backgroundColor: "white",
    color: "black",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
  },
};

function App() {
  const [theme, setTheme] = React.useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div style={theme ? styles.light : styles.dark}>
      <h1 className="external">External Styling</h1>

      <h1>Internal Styling</h1>

      <h1
        style={
          theme
            ? { color: "black", backgroundColor: "white" }
            : { color: "white", backgroundColor: "black" }
        }
      >
        Inline Styling
      </h1>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default App;
