import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Todo } from '../../models/Todo.interface';
import { setDone } from '../../reducers/todo.actions';
import Checkbox from '../Checkbox';
import './TodoItem.css';

const TodoItem = (todo: Todo) => {
  const { done, id, todo: title } = todo;
  const todoContext = useContext(TodoContext);

  const handlerClick = () => {
    todoContext?.dispatch(setDone(todo));
  };
  const isDone = done ? 'done-Item' : '';
  console.log('isDone', isDone);
  return (
    <li className={`todoItem--container  ${isDone}`} onClick={handlerClick}>
      <Checkbox checked={done}></Checkbox>
      <span className={isDone}>{title}</span>
    </li>
  );
};

export default TodoItem;
