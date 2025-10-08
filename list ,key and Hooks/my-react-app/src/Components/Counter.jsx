import React, { useState } from 'react'
import "./Counter.css";
function Counter() {
    const [count,setCount] = useState(0);

    const increment = () => setCount(count + 1);
      const decrement = () => setCount(count - 1);

  return (
    <div>
       <h2>Counter example of useState</h2>
       <h3>Count: {count}</h3>
       <button className="counter-btn" onClick={increment} >Increment</button>
       <button className="counter-btn" onClick={decrement}>Decrement</button>
       
       
    </div>
  );
}

export default Counter;
