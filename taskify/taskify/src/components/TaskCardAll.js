import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskCardAll = ({ task }) => {
  const { deleteTask, markTaskComplete, markTaskPending } = useContext(TaskContext);

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Deadline:</strong> {task.deadline}</p>
      <p><strong>Category:</strong> {task.category}</p>
      <p><strong>Status:</strong> {task.status}</p>

      <div className="task-card-buttons">
        <button onClick={() => markTaskComplete(task.id)} className="btn-complete">
          Mark as Complete
        </button>
        <button onClick={() => markTaskPending(task.id)} className="btn-pending">
          Mark as Pending
        </button>
        <button onClick={() => deleteTask(task.id)} className="btn-delete">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCardAll;
