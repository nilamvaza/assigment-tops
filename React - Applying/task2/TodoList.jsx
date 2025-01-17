
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from './Atoms';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState); // To read the todo list state
  const setTodoList = useSetRecoilState(todoListState); // To update the todo list state

  const removeTask = (id) => {
    setTodoList((oldList) => oldList.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTodoList((oldList) =>
      oldList.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  return (
    <div>
      {todoList.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          removeTask={removeTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
