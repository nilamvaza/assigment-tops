// src/TodoItem.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from './features/todoSlice';

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleUpdate = () => {
    if (updatedText.trim()) {
      dispatch(updateTodo({
        id: todo.id,
        text: updatedText,
        isComplete: todo.isComplete,
      }));
      setIsEditing(false);
    }
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
        />
      ) : (
        <span className={todo.isComplete ? 'completed' : ''}>
          {todo.text}
        </span>
      )}

      <div className="actions">
        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        <button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button onClick={() => dispatch(updateTodo({
          id: todo.id,
          text: todo.text,
          isComplete: !todo.isComplete
        }))}>
          {todo.isComplete ? 'Undo' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
