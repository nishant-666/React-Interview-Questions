import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";

export default function CachedCall() {
  const { data, isLoading } = useQuery("data", () => {
    return fetch("https://jsonplaceholder.typicode.com/albums").then(
      (response) => response.json()
    );
  });
  let navigate = useNavigate();

  if (isLoading) return <h1>Loading..</h1>;
  return (
    <div>
      <ul className="navbar">
        <li onClick={() => navigate("/normal-call")}>Normal Call</li>

        <li onClick={() => navigate("/cached-call")}>Cached Call</li>
      </ul>

      <h1>Cached Call</h1>

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
