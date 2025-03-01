import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <div className="app">
      <h1>CRUD Todo App</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;
