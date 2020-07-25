import { Todo } from '../models/Todo.interface';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const SET_DONE = 'SET_DONE';

interface AddTodo {
  type: typeof ADD;
  payload: Todo;
}
interface DeleteTodo {
  type: typeof DELETE;
  payload: Todo;
}
interface DoneTodo {
  type: typeof SET_DONE;
  payload: Todo;
}
export type TodoTypes = AddTodo | DeleteTodo | DoneTodo;
