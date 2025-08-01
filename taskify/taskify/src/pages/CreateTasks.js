import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate

const CreateTask = ({ addTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    category: '',
    status: null,
  });

  const navigate = useNavigate(); // ✅ Create navigate instance

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      ...task,
      id: Date.now(),
    };
    addTask(newTask);
    setTask({
      title: '',
      description: '',
      dueDate: '',
      category: '',
      status: null,
    });

    navigate('/all-tasks'); // ✅ Correct path
  };

  return (
    <div className="container my-5">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={task.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <input
            type="text"
            className="form-control"
            name="category"
            value={task.category}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
