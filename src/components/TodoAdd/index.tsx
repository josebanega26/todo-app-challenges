import React, { useState, ChangeEvent, useContext } from 'react';
import { addTodo } from '../../reducers/todo.actions';
import './TodoAdd.style.css';
import { TodoContext } from '../../context/TodoContext';

interface TodoAddProps {}
const TodoAdd = (props: TodoAddProps) => {
  const todoContext = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim().length < 1) {
      return null;
    }
    const idPrefix = new Date().getUTCMilliseconds().toString();
    const newTodo = {
      todo: input,
      id: `${idPrefix}-${input}`,
      done: false,
    };
    todoContext?.dispatch(addTodo(newTodo));
    setInput('');
  };

  return (
    <form className='todoAdd--container' onSubmit={handleSubmit}>
      <input
        type='text'
        autoComplete='off'
        name='title'
        value={input}
        onChange={handleInput}
        placeholder='add details...'
      />
      <input type='submit' value='Add' />
    </form>
  );
};

export default TodoAdd;
