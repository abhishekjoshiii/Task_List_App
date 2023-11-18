import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const TaskForm = ({ onAddTask, inputRef }) => {
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newTask.trim() !== '') {
            onAddTask({ id: Date.now(), title: newTask, completed: false });
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='m-1'>
            <input className='form-control'
                type="text"
                placeholder="Add a new task"
                value={newTask}
                onChange={handleInputChange}
                ref={inputRef}
            />
            <button variant="primary" className='btn btn-primary m-1' type="submit">Add Task</button>

        </form>
    );
};

export default TaskForm;
