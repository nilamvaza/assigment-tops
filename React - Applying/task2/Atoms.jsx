
import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [], // initial state: an empty list of tasks
});
