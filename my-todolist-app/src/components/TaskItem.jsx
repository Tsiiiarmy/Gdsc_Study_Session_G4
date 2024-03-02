import React from 'react';

const TaskItem = ({ task, onComplete, onRemove }) => {
  const handleComplete = () => {
    onComplete(task.id);
  };

  const handleRemove = () => {
    onRemove(task.id);
  };

  return (
    <div>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
      <button onClick={handleComplete}>{task.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default TaskItem;
