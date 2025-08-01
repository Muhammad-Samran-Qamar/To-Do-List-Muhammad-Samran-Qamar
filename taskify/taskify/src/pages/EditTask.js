// src/components/EditTask.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditTask = ({ tasks, updateTask }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const taskToEdit = tasks[id];
  const [editedTask, setEditedTask] = useState(taskToEdit || {});

  useEffect(() => {
    if (!taskToEdit) {
      navigate('/all-tasks'); // If no task found, go back
    }
  }, [taskToEdit, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateTask(id, editedTask);
    navigate('/all-tasks'); // Go back to All Tasks
  };

  return (
    <div className="create-task">
      <h2>Edit Task</h2>
      <form className="create-task-form" onSubmit={handleSave}>
        <label>
          Title
          <input
            type="text"
            name="title"
            value={editedTask.title || ''}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Description
          <textarea
            name="description"
            value={editedTask.description || ''}
            onChange={handleChange}
          ></textarea>
        </label>

        <label>
          Due Date
          <input
            type="date"
            name="dueDate"
            value={editedTask.dueDate || ''}
            onChange={handleChange}
          />
        </label>

        <label>
          Category
          <input
            type="text"
            name="category"
            value={editedTask.category || ''}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditTask;
