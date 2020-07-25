import React, { useState, ChangeEvent } from 'react';
import { addTodo } from '../../reducers/todo.actions';
import './TodoAdd.style.css';

interface TodoAddProps {
  dispatch: Function;
}
const TodoAdd = ({ dispatch }: TodoAddProps) => {
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
    dispatch(addTodo(newTodo));
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
