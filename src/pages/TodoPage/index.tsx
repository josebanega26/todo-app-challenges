import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../../reducers/todo.reducer';
import TabsList from '../../components/TabsList';
import TodoAdd from '../../components/TodoAdd';
import { Todo } from '../../models/Todo.interface';
import './TodoPage.style.css';
import { TodoContext } from '../../context/TodoContext';
import TodoList from '../../components/TodoList';

const TodoPage = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      <div className='todoPage--container'>
        <TabsList></TabsList>
        <TodoAdd></TodoAdd>
        <TodoList todos={todos}></TodoList>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoPage;
