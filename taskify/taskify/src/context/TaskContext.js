import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // ✅ Create a new task
  const addTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask, id: Date.now(), status: 'Pending' }]);
  };

  // ✅ Edit a task
  const editTask = (updatedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? { ...task, ...updatedTask } : task))
    );
  };

  // ✅ Mark as Completed
  const markTaskComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: 'Completed' } : task))
    );
  };

  // ✅ Mark as Pending
  const markTaskPending = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status: 'Pending' } : task))
    );
  };

  // ✅ Delete a task (ONLY removes from All if called here)
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // ✅ Get tasks by status for PendingTasks.js & CompletedTasks.js
  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        markTaskComplete,
        markTaskPending,
        getTasksByStatus,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
