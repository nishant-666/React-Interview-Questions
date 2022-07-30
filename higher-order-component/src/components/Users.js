import React from "react";
import HigherOrder from "../HigherOrder";

function Users({ data }) {
  return (
    <div>
      <h1>Hello from Users</h1>
      {data.slice(0, 10).map((user) => {
        return <p>{user.name}</p>;
      })}
    </div>
  );
}

const UsersComp = HigherOrder("Users", Users, "users");

export default UsersComp;
