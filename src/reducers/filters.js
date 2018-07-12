export default (state = [], action) => {
  switch (action.type) {
    case 'SHOW_UNCOMPLETED' :
      return state.filter(item => !!item.completed);
    case 'SHOW_COMPLETED' :
      return state.filter(item => item.completed);
    case 'SHOW_ALL' :
      return state;
    default: 
      return state;
  }
}
