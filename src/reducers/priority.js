import { SET_PRIORITY, Priorities } from '../components/constants';

export default (state = Priorities.NORMAL, action) =>{
  switch (action.type) {
    case SET_PRIORITY:
      return action.priority;
    default:
      return state;
  }
}
