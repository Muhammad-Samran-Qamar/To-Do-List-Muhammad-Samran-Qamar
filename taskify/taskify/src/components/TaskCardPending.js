import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCardPending = ({ task }) => {
  const { markComplete } = useContext(TaskContext);

  const handleRemoveFromPending = () => {
    markComplete(task.id);
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Status:</strong> Pending</p>
      <button onClick={handleRemoveFromPending}>Mark as Completed</button>
    </div>
  );
};

export default TaskCardPending;
