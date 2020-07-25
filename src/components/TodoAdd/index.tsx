import React, { useState, ChangeEvent } from 'react';
import './TodoApp.style.css';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('input :>> ', input);
  };
  return (
    <form className="todoAdd--container" onSubmit={handleSubmit}>
      <input
        type="text"
        autoComplete="off"
        name="title"
        value={input}
        onChange={handleInput}
        placeholder="add details..."
      />
      <input type="submit" value="Add" />
    </form>
  );
};

export default TodoApp;
