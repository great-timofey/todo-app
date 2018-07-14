import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, MODIFY_TODO } from '../constants';

export default (state = [], action) => {
  const { id, name, desc, priority, deadline, completionDate } = action;
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id,
          name,
          desc,
          priority,
          deadline,
          completionDate,
          completed: false
        }
      ];
    case REMOVE_TODO:
      return state.filter(item => item.id !== id);
    case TOGGLE_TODO:
      return state.map(item => {
        if (item.id === id) {
          item.completed = !(item.completed);
          if (!item.completed) {
            item.completionDate = undefined;
          } else {
            item.completionDate = completionDate;
          }
        }
        return item;
      });
    case MODIFY_TODO:
      return state.map(item => {
        if (item.id === id) {
          item.name = name;
          item.desc = desc;
          item.priority = priority;
          item.deadline = deadline;
        }
        return item;
      })
    default:
      return state;
  }
}
