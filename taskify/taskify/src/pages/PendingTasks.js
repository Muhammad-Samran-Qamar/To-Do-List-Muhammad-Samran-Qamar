import React from 'react';

const PendingTasks = ({ tasks, clearTaskStatus }) => {
  const pending = tasks.filter((task) => task.status === 'Pending');

  return (
    <div className="page">
      <h2>Pending Tasks</h2>
      {pending.length === 0 ? (
        <p>No pending tasks.</p>
      ) : (
        pending.map((task) => (
          <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate || 'N/A'}</p>
            <p>Category: {task.category || 'N/A'}</p>
            <p>Status: {task.status}</p>
            <button className="delete" onClick={() => clearTaskStatus(task)}>
              Delete Task
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default PendingTasks;
