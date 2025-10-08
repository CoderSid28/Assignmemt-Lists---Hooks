import React, { useState, useRef } from "react";

function App() {
  const [count, setCount] = useState(0); 
  const renders = useRef(0); 
  const nonRenderCount = useRef(0); 

  const incrementCount = () => {
    setCount(count + 1);
  };

  const incrementRef = () => {
    nonRenderCount.current += 1; 
    console.log("nonRenderCount:", nonRenderCount.current);
  };

  renders.current += 1; 

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>useRef to Avoid Re-renders</h1>
      <p>Component renders: {renders.current}</p>
      <p>State count (re-renders on change): {count}</p>
      <p>Ref count (does NOT re-render): {nonRenderCount.current}</p>

      <button onClick={incrementCount} style={{ margin: "5px" }}>
        Increment State
      </button>

      <button onClick={incrementRef} style={{ margin: "5px" }}>
        Increment Ref
      </button>
    </div>
  );
}

export default App;
