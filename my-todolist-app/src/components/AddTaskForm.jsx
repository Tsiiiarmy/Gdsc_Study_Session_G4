import React, { useState } from "react";

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!task.trim()) return;
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} /> 
      <br /><button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
