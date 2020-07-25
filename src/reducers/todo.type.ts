import { Todo } from '../models/Todo.interface';

export const ADD = 'ADD';
export const DELETE = 'DELETE';

interface AddTodo {
  type: typeof ADD;
  payload: Todo;
}
interface DeleteTodo {
  type: typeof DELETE;
  payload: Todo;
}
export type TodoTypes = AddTodo | DeleteTodo;
