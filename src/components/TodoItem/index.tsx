import React, { useContext } from 'react';
import { TodoContext } from '../../context/TodoContext';
import { Todo } from '../../models/Todo.interface';
import { toggleDone, deleteTodoItem } from '../../reducers/todo.actions';
import Checkbox from '../Checkbox';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';
import './TodoItem.css';

const TodoItem = (todo: Todo) => {
  const { done, todo: title } = todo;
  const todoContext = useContext(TodoContext);

  const handlerClick = () => {
    todoContext?.todoDispatch(toggleDone(todo));
  };
  const handlerDelete = () => {
    todoContext?.todoDispatch(deleteTodoItem(todo));
  };
  const isDone = done ? 'done-Item' : '';
  return (
    <li className={`todoItem--container  ${isDone}`}>
      <div className="d-flex" onClick={handlerClick}>
        <Checkbox checked={done}></Checkbox>
        <span className={isDone}>{title}</span>
      </div>
      {todoContext?.activedTag === 'Completed' ? (
        <DeleteIcon className="delete--button" onClick={handlerDelete}></DeleteIcon>
      ) : null}
    </li>
  );
};

export default TodoItem;
