import PaginationComponent from "./components/Pagination";
import "./App.css";
import { useEffect, useState } from "react";
import Posts from "./components/Posts";

function App() {
  const [posts, setPosts] = useState([]);
  let limit = 10;
  const [currentPage, setCurrent] = useState(1);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  let lastIndex = currentPage * limit;
  let firstIndex = lastIndex - limit;

  let currentItems = posts.slice(firstIndex, lastIndex);
  return (
    <div className="App">
      <Posts posts={currentItems} />
      <PaginationComponent
        currentPage={currentPage}
        limit={limit}
        totalPosts={posts?.length}
        setCurrent={setCurrent}
      />
    </div>
  );
}

export default App;
