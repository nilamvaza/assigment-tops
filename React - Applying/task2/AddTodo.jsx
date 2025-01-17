
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './Atoms';

const AddTodo = () => {
  const [taskText, setTaskText] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const handleAddTask = () => {
    if (taskText.trim()) {
      setTodoList((oldList) => [
        ...oldList,
        { id: Date.now(), text: taskText, isComplete: false },
      ]);
      setTaskText('');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default AddTodo;
