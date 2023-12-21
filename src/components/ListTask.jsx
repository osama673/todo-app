import React from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import "../App.css";

const ListTask = () => {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <div className="todo-container">
      <div className="column">
        <h2>Done</h2>
        {tasks
          .filter((t) => t.isDone)
          .map((task) => (
            <Task key={task.id} {...task} />
          ))}
      </div>

      <div className="column">
        <h2>Not Done</h2>
        {tasks
          .filter((t) => !t.isDone)
          .map((task) => (
            <Task key={task.id} {...task} />
          ))}
      </div>
    </div>
  );
};

export default ListTask;
