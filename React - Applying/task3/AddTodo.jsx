// src/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './features/todoSlice';

const AddTodo = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        text: taskText,
        isComplete: false
      }));
      setTaskText('');
    }
  };

  return (
    <div className="add-todo">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTodo;
