import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_FILTER, SET_PRIORITY } from '../components/constants';
let nextId = 0;
export const addTodo = (name, desc) => { 
  return { 
    type: ADD_TODO,
    id: nextId++,
    name,
    desc
  } 
};

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id
  }
};

export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
};

export const setFilter = filter => {
  return {
    type: SET_FILTER,
    filter
  }
};

export const setPriority = priority => {
  return {
    type: SET_PRIORITY,
    priority
  }
}

