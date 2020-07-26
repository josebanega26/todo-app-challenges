import React, { createContext } from 'react';
import { TodoTypes } from '../reducers/todo.type';
import { Todo } from '../models/Todo.interface';
export interface TodoContextInterface {
  todos: Todo[];
  todoDispatch: React.Dispatch<TodoTypes>;
  activedTag: string;
}
export const TodoContext = createContext<TodoContextInterface | null>(null);
