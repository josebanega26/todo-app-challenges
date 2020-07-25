import React from 'react';
import TodoItem from '../TodoItem';
import { Todo } from '../../models/Todo.interface';

interface TodoListProps {
  todos: Todo[];
}
const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map(({ id, ...rest }: Todo) => (
        <TodoItem {...rest} key={id} id={id}></TodoItem>
      ))}
    </ul>
  );
};

export default TodoList;
