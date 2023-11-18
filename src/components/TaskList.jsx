import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onTaskClick }) => (
    <ul>
        {tasks.map(task => (<Task key={task.id} task={task} onClick={() => onTaskClick(task.id)} />))}
    </ul>
);

export default TaskList;
