import "./App.css";
import { familyTree } from "./data";
import Family from "./Family";

function App() {
  return (
    <div>
      <Family familyTree={familyTree} />
    </div>
  );
}

export default App;
