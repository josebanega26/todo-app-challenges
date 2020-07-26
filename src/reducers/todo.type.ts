import { Todo } from '../models/Todo.interface';

export const ADD = 'ADD';
export const DELETE_ITEM = 'DELETE_ITEM';
export const TOGGLE_DONE = 'TOGGLE_DONE';
export const DELETE_ALL = 'DELETE_ALL';

interface AddTodo {
  type: typeof ADD;
  payload: Todo;
}
interface DeleteItemTodo {
  type: typeof DELETE_ITEM;
  payload: Todo;
}
interface ToggleDoneTodo {
  type: typeof TOGGLE_DONE;
  payload: Todo;
}
interface DeleteAllTodo {
  type: typeof DELETE_ALL;
  payload: any;
}
export type TodoTypes = AddTodo | DeleteItemTodo | ToggleDoneTodo | DeleteAllTodo;
