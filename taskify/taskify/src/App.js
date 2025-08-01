import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateTask from './pages/CreateTasks';
import AllTasks from './pages/AllTasks';
import PendingTasks from './pages/PendingTasks';
import CompletedTasks from './pages/CompletedTasks';
import Profile from './pages/Profile';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // ✅ Dark Mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (index, updatedTask) => {
    const newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTasks(newTasks);
  };

  const clearTaskStatus = (taskToClear) => {
    const newTasks = tasks.map((task) =>
      task.id === taskToClear.id ? { ...task, status: null } : task
    );
    setTasks(newTasks);

  };
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Router>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-task" element={<CreateTask addTask={addTask} />} />
        <Route path="/all-tasks" element={<AllTasks tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />} />
        <Route path="/pending-tasks" element={<PendingTasks tasks={tasks} clearTaskStatus={clearTaskStatus} />} />
        <Route path="/completed-tasks" element={<CompletedTasks tasks={tasks} clearTaskStatus={clearTaskStatus} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
