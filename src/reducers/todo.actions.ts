import { Todo } from '../models/Todo.interface';
import { TodoTypes, ADD } from './todo.type';

export const addTodo = (todo: Todo): TodoTypes => ({
  type: ADD,
  payload: todo,
});
