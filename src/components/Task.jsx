import React from 'react';
import styles from './Task.module.css';

const Task = ({ task, onClick }) => (
    <p className={task.completed ? styles.completed : null} onClick={onClick}>
        {task.title}
    </p>
);

export default Task;
