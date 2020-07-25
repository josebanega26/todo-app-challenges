import { ADD, DELETE, TodoTypes, SET_DONE } from './todo.type';
import { Todo } from '../models/Todo.interface';

export const initialState: Todo[] = [
  {
    done: true,
    id: 'viniloversus',
    todo: 'learn vinilo versus',
  },
  {
    done: false,
    id: 'vinilove2321rsus',
    todo: 'so versus',
  },
];

export const todoReducer = (
  state = initialState,
  { type, payload }: TodoTypes
): Todo[] => {
  switch (type) {
    case ADD:
      return [...state, payload];
    case SET_DONE:
      return state.map((todo) =>
        todo.id === payload.id ? { ...todo, done: !todo.done } : todo
      );
    case DELETE:
      return state;
    default:
      return state;
  }
};
