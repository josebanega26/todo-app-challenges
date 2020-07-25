import React from 'react';
import TabsList from '../../components/TabsList';
import TodoAdd from '../../components/TodoAdd';
import './TodoPage.style.css';

const TodoPage = () => {
  return (
    <div className="todoPage--container">
      <TabsList></TabsList>
      <TodoAdd></TodoAdd>
    </div>
  );
};

export default TodoPage;
