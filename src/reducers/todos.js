import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../constants';

export default (state = [], action) => {
  const { id, name, desc, priority, date } = action;
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id,
          name,
          desc,
          priority,
          date,
          completed: false
        }
      ];
    case REMOVE_TODO:
      return state.filter(item => item.id !== id);
    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === id) {
          item.completed = !(item.completed);
        }
        return item;
      });
    default:
      return state;
  }
}
