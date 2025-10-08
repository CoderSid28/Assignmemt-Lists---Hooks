import React from "react";
import FruitList from "./Components/FruitList"; 
import UserList from "./Components/UserList";
import Counter from "./Components/Counter";
import UserData from "./Components/UserData";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Welcome to My React App </h1>
     
      <FruitList />
      <UserList/>
      <Counter/>
      <UserData/>
    </div>
  );
}

export default App;
