import React, { useState, useEffect } from "react";

export default function HigherOrder(title, Component, request) {
  return function HOC() {
    const [data, setData] = useState([]);
    const getData = async () => {
      let data = await fetch(`https://jsonplaceholder.typicode.com/${request}`)
        .then((response) => {
          return response;
        })
        .catch((err) => {
          return err;
        });

      setData(await data.json());
    };

    useEffect(() => {
      getData();
    }, []);
    return (
      <div>
        <h2>{title}</h2>

        <Component data={data} />
      </div>
    );
  };
}
