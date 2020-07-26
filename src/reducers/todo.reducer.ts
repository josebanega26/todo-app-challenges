import { ADD, DELETE_ITEM, TodoTypes, TOGGLE_DONE, DELETE_ALL } from './todo.type';
import { Todo } from '../models/Todo.interface';

export const initialState: Todo[] = [];

export const todoReducer = (state = initialState, { type, payload }: TodoTypes): Todo[] => {
  switch (type) {
    case ADD:
      return [payload, ...state];
    case TOGGLE_DONE:
      return state.map((todo) => (todo.id === payload.id ? { ...todo, done: !todo.done } : todo));
    case DELETE_ITEM:
      return state.filter((todo) => todo.id !== payload.id);
    case DELETE_ALL:
      return [];
    default:
      return state;
  }
};
