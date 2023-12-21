import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "./taskSlice";
import "../App.css"

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState("");
  const tasks = useSelector((state) => state.task.tasks);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskDescription.trim() !== "") {
      dispatch(
        setTask([
          ...tasks,
          {
            id: tasks.length + 1,
            description: taskDescription,
            isDone: false,
          },
        ])
      );
      setTaskDescription("");
    }
  };

  return (
    <div className="center-container">
      <input className="input-c"
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button className="add-button" onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
