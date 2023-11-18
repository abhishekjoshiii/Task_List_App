import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import useLocalStorage from './components/useLocalStorage';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';

const App = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');

  // useEffect(() => {
  //   document.title = `Incomplete Tasks: ${tasks.filter(task => !task.completed).length}`;
  // }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, completed: !task.completed } : task)));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') {
      return task.completed;
    } else if (filter === 'incomplete') {
      return !task.completed;
    }
    return true;
  });

  return (
    <Router>
      <div className={styles.container}>
        <h1>Task List App</h1>
        <TaskForm onAddTask={addTask} />

        <div className='bg-light p-1'>
          <button className='btn btn-warning m-1'><Link to="/" className="text-dark">All</Link></button>
          <button className='btn btn-success m-1'><Link to="/completed" className="text-white">Completed</Link></button>
          <button className='btn btn-danger m-1'><Link to="/incomplete" className="text-dark">Incomplete</Link></button>

          <Routes>
            <Route path="/" element={<TaskList tasks={filteredTasks} onTaskClick={toggleTaskCompletion} />} />
            <Route path="/completed" element={<TaskList tasks={tasks.filter(task => task.completed)} onTaskClick={toggleTaskCompletion} />} />
            <Route path="/incomplete" element={<TaskList tasks={tasks.filter(task => !task.completed)} onTaskClick={toggleTaskCompletion} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
