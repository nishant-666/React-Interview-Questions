import { useState, useEffect, useRef, useCallback } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const handleSearch = (value) => {
    setLoading(true);
    setSearch(value);
    setPageNumber(1);
  };
  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(
          `http://openlibrary.org/search.json?q=${search.toLowerCase()}&page=${pageNumber}`
        )
        .then((res) => {
          setPosts((prev) => {
            return [...prev, ...res.data.docs.map((val) => val.title)];
          });
          setLoading(false);
        });
    }, 200);

    return () => {
      clearTimeout(debouncing);
    };
  }, [search, pageNumber]);

  let endOfThePage = useCallback(
    (val) => {
      if (loading) return;

      if (observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((item) => {
        if (item[0].isIntersecting) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (val) observer.current.observe(val);
    },
    [loading]
  );

  return (
    <div className="App">
      <input
        type="text"
        value={search}
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
      />

      {loading ? (
        <h1>Loading..</h1>
      ) : (
        <ul>
          {posts.map((book, index) => {
            if (posts.length === index + 1) {
              return <li ref={endOfThePage}>{book}</li>;
            } else {
              return <li>{book}</li>;
            }
          })}
        </ul>
      )}
    </div>
  );
}

export default App;
