import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NormalCall() {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  if (loading) return <h1>Loading..</h1>;
  return (
    <div>
      <ul className="navbar">
        <li onClick={() => navigate("/normal-call")}>Normal Call</li>

        <li onClick={() => navigate("/cached-call")}>Cached Call</li>
      </ul>
      {data?.map((item) => {
        return (
          <>
            <h2>
              {item?.id}. {item?.title}
            </h2>
          </>
        );
      })}
    </div>
  );
}
