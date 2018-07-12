let nextId = 0;
export const addTodo = text => { 
  return { 
    type: 'ADD_TODO',
    id: nextId++,
    text
  } 
};

export const removeTodo = id => {
  return {
    type: 'REMOVE_TODO',
    id
  }
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
