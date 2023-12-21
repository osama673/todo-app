import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "./taskSlice";
import "../App.css";

const Task = ({ id, isDone, description }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(description);
  const [newIsDone, setNewIsDone] = useState(isDone);
  const [newTask, setNewTask] = useState({ id, isDone, description });
  const tasks = useSelector((state) => state.task.tasks);

  const onEdit = () => {
    const newArray = tasks.map((obj) => {
      if (obj.id === newTask.id) {
        return { ...newTask, description: newDescription };
      }
      return obj;
    });
    dispatch(setTask(newArray));
    setIsEditing(false);
  };

  const onChecked = useCallback(
    (isDone) => {
      const newArray = tasks.map((obj) => {
        if (obj.id === newTask.id) {
          return { ...newTask, isDone };
        }
        return obj;
      });
      dispatch(setTask(newArray));
    },
    [newTask, tasks]
  );

  return (
    <div className="task">
      <input
        key={id}
        type="checkbox"
        checked={newIsDone}
        onChange={(e) => {
          setNewIsDone(e.target.checked);
          onChecked(e.target.checked);
        }}
      />
      {isEditing ? (
        <input
          type="text"
          value={newDescription}
          onChange={(e) => {
            setNewDescription(e.target.value);
            setNewTask({ id, description: e.target.value, isDone });
          }}
        />
      ) : (
        <span>{description}</span>
      )}
      {isEditing && (
        <button className="edit-button" onClick={() => onEdit()}>
          Save
        </button>
      )}

      {!isEditing && (
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}
    </div>
  );
};

export default Task;
