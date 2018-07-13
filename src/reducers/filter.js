import { SET_FILTER, Filters } from '../components/constants';

export default (state = Filters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_FILTER :
      return action.filter;
    default: 
      return state;
  }
}
