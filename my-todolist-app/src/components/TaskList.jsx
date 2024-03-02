import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onComplete, onRemove }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onComplete={onComplete} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TaskList;
