import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 data-testid="count">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
}
