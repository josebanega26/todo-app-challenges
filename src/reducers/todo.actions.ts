import { Todo } from '../models/Todo.interface';
import { TodoTypes, ADD, TOGGLE_DONE, DELETE_ITEM, DELETE_ALL } from './todo.type';

export const addTodo = (todo: Todo): TodoTypes => ({
  type: ADD,
  payload: todo
});

export const deleteTodoItem = (todo: Todo): TodoTypes => ({
  type: DELETE_ITEM,
  payload: todo
});

export const toggleDone = (todo: Todo): TodoTypes => ({
  type: TOGGLE_DONE,
  payload: todo
});

export const deleteAllItem = (): TodoTypes => ({
  type: DELETE_ALL,
  payload: []
});
