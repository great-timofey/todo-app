import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, MODIFY_TODO, SET_FILTER  } from '../constants';
import { v4 } from 'node-uuid';

export const addTodo = (name, desc, priority, date) => ({ 
  type: ADD_TODO,
  id: v4(),
  name,
  desc,
  priority,
  date
}); 

export const modifyTodo = (id, name, desc, priority, date) => ({
  type: MODIFY_TODO,
  id,
  name,
  desc,
  priority,
  date
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const setFilter = filter => ({
  type: SET_FILTER,
  filter
});

