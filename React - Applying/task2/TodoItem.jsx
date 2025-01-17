import React from 'react';

const TodoItem = ({ task, removeTask, toggleComplete }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={() => toggleComplete(task.id)}
      />
      <span
        style={{
          textDecoration: task.isComplete ? 'line-through' : 'none',
          marginLeft: '10px',
        }}
      >
        {task.text}
      </span>
      <button onClick={() => removeTask(task.id)} style={{ marginLeft: '10px' }}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
