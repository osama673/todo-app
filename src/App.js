import React from "react";
import ListTask from "./components/ListTask";
import AddTask from "./components/AddTask"; 

const App = () => {
  return (
    <div className="to-do">
      <h1>My Todo</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;
