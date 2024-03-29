import "./styles.css";

import React, { useState, memo, useCallback } from "react";

export default function App2() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  //const incrementCount = function setCount() { return count + 1; };
  const incrementCount = useCallback(() => setCount(count + 1), [count]);
  
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment counter</button>
      <h3>Input text: {input}</h3>
      <h3>Count: {count}</h3>
      <hr />
      <ChildComponent count={count} onclick={incrementCount} />
    </div>
  );
}

const ChildComponent = memo(function ChildComponent({ count, onclick }) {
  console.log("child component is rendering");
  return (
    <div>
      <h2>This is a child component.</h2>
      <button onClick={onclick}>Increment</button>
      <h4>Count: {count}</h4>
    </div>
  );
});
