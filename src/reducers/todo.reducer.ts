import { ADD, DELETE, TodoTypes } from './todo.type';
import { Todo } from '../models/Todo.interface';

export const initialState: Todo[] = [];

export const todoReducer = (
  state = initialState,
  { type, payload }: TodoTypes
): Todo[] => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case DELETE:
      return state;
    default:
      return state;
  }
};
