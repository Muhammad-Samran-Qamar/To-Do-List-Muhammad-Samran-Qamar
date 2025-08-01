// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="page home">

      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">Welcome to Taskify</h1>
        <p className="hero-tagline">
          Manage Tasks. Master Productivity.
        </p>
      </header>

      {/* About Section */}
      <section className="overview">
        <h2>About</h2>
        <p>
          Taskify is your personal task manager designed to help you organize your day effortlessly.
          Easily create tasks, set deadlines, categorize your work, and track your progress — all in one place.
          Whether you’re a student, a busy professional, or just love staying organized, Taskify is built for you.
        </p>
      </section>

      {/* Features Grid Section */}
      <section className="features-grid">
        <h2>Explore the App</h2>
        <div className="grid">
            <Link to="/tasks" className="feature-card">
            <h3>Create Task</h3>
            <p>Add new tasks with deadlines and categories.</p>
          </Link>
          <Link to="/completed" className="feature-card">
            <h3>Completed Tasks</h3>
            <p>See what you’ve accomplished so far.</p>
          </Link>
          <Link to="/pending" className="feature-card">
            <h3>Pending Tasks</h3>
            <p>Focus on what’s left to do.</p>
          </Link>
           <Link to="/create" className="feature-card">
            <h3>All Tasks</h3>
            <p>View all your tasks in one place.</p>
          </Link>
          {/* <Link to="/categories" className="feature-card">
            <h3>Categories</h3>
            <p>Organize tasks by type: Work, Personal, Shopping, Others.</p>
          </Link> */}
          <Link to="/profile" className="feature-card">
            <h3>Profile</h3>
            <p>Manage your account and settings.</p>
          </Link>
        </div>
      </section>

    

      {/* Optional Footer */}
      <footer className="home-footer">
        <p>Taskify &copy; {new Date().getFullYear()} — All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Home;
