import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <nav className="navbar sticky-navbar">
      <h1>Taskify</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-task">Create Task</Link></li>
        <li><Link to="/all-tasks">All Tasks</Link></li>
        <li><Link to="/pending-tasks">Pending Task</Link></li>
        <li><Link to="/completed-tasks">Completed Task</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li>
          <button
            className="mode-toggle-btn"
            onClick={toggleDarkMode}
          >
            {darkMode ?  '☀️ Light Mode': '🌙 Dark Mode'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
