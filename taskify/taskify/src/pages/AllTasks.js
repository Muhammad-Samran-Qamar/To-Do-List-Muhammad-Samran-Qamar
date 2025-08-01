import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AllTasks = ({ tasks, updateTask, deleteTask }) => {
  const navigate = useNavigate();
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState({});
  const [message, setMessage] = useState('');

  const startEditing = (index) => {
    setEditingTaskIndex(index);
    setEditedTask(tasks[index]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const saveTask = () => {
    updateTask(editingTaskIndex, editedTask);
    setEditingTaskIndex(null);
  };

  const saveStatus = (index, status) => {
    const updatedTask = { ...tasks[index], status };
    updateTask(index, updatedTask);
    setMessage(`Your task has been saved in ${status}.`);

    setTimeout(() => {
      if (status === 'Pending') {
        navigate('/pending-tasks');
      } else {
        navigate('/completed-tasks');
      }
    }, 2000);
  };

  // ✅ This makes your Delete button work
  const handleDelete = (index) => {
    deleteTask(index);
    
  };

  return (
    <div className="page">
      <h2>All Tasks</h2>
      {message && (
        <p style={{ color: 'green', fontWeight: 'bold' }}>{message}</p>
      )}

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task, index) => (
          <div className="task-card" key={index}>
            {editingTaskIndex === index ? (
              <form
                className="create-task-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  saveTask();
                }}
              >
                <label>
                  Title
                  <input
                    type="text"
                    name="title"
                    value={editedTask.title}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Description
                  <textarea
                    name="description"
                    value={editedTask.description}
                    onChange={handleChange}
                  ></textarea>
                </label>

                <label>
                  Due Date
                  <input
                    type="date"
                    name="dueDate"
                    value={editedTask.dueDate}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Category
                  <input
                    type="text"
                    name="category"
                    value={editedTask.category}
                    onChange={handleChange}
                  />
                </label>

                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Due: {task.dueDate || 'N/A'}</p>
                <p>Category: {task.category || 'N/A'}</p>
                <p>Status: {task.status || 'None'}</p>

                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => saveStatus(index, 'Pending')}>Save In Pending</button>
                <button onClick={() => saveStatus(index, 'Completed')}>Save In Completed</button>
                <button onClick={() => handleDelete(index)}>Delete Task</button>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllTasks;
