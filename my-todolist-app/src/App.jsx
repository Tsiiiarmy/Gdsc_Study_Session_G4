import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1><u>My To-Do List Website</u></h1>
      <p align='center'><b>Welcome to my productivity playground 😆</b></p>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onComplete={toggleComplete} onRemove={removeTask} />
    </div>
  );
};

export default App;
