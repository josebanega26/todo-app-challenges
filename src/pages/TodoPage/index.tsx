import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../../reducers/todo.reducer';
import TabsList from '../../components/TabsList';
import TodoAdd from '../../components/TodoAdd';
import { Todo } from '../../models/Todo.interface';
import './TodoPage.style.css';

const TodoPage = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className='todoPage--container'>
      <TabsList></TabsList>
      <TodoAdd dispatch={dispatch}></TodoAdd>
      <ul>
        {todos.map(({ todo, id }: Todo) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
