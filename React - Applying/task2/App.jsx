import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      
    </div>
  );
};


export default App;
