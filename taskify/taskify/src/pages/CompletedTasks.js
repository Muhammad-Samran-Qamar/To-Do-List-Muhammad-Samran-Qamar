import React from 'react';

const CompletedTasks = ({ tasks, clearTaskStatus }) => {
  const completed = tasks.filter((task) => task.status === 'Completed');

  return (
    <div className="page">
      <h2>Completed Tasks</h2>
      {completed.length === 0 ? (
        <p>No completed tasks.</p>
      ) : (
        completed.map((task) => (
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

export default CompletedTasks;
