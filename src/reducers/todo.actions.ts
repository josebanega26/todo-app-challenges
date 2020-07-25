import { Todo } from '../models/Todo.interface';
import { TodoTypes, ADD, SET_DONE } from './todo.type';

export const addTodo = (todo: Todo): TodoTypes => ({
  type: ADD,
  payload: todo,
});

export const setDone = (todo: Todo): TodoTypes => ({
  type: SET_DONE,
  payload: todo,
});
