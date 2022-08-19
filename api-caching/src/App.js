import "./App.css";
import NormalCall from "./Pages/NormalCall";
import CachedCall from "./Pages/CachedCall";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  let queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/normal-call" element={<NormalCall />} />
          <Route path="/cached-call" element={<CachedCall />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
