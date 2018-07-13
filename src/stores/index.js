import { createStore } from 'redux';
import reducer from '../reducers'

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {

  }
}

const persistedState = {...loadState()};
const store = createStore(
  reducer, 
  persistedState
);

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  });
})

//only for dev 
window.store = store;

export default store;
