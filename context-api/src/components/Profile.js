import React from "react";
import { useContext } from "react";
import { UserData } from "../contexts/GlobalContext";

export default function Profile() {
  let { setName } = useContext(UserData);
  return (
    <div>
      <button onClick={() => setName("Abhishek")}>Change the Name</button>
    </div>
  );
}
