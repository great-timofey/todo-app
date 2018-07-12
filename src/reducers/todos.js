export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'REMOVE_TODO':
      return state.filter(item => item.id !== action.id)
    case 'TOGGLE_TODO':
      return state.map(item => {
        if (item.id === action.id) {
          item.completed = !(item.completed);
        }
        return item;
      });
    default:
      return state;
  }
}
