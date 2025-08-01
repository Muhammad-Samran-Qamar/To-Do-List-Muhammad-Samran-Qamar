import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCardCompleted = ({ task }) => {
  const { markPending } = useContext(TaskContext);

  const handleRemoveFromCompleted = () => {
    markPending(task.id);
  };

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Status:</strong> Completed</p>
      <button onClick={handleRemoveFromCompleted}>Mark as Pending</button>
    </div>
  );
};

export default TaskCardCompleted;
