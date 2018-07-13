import React, { Component } from 'react';
import store from '../stores';
import { Provider } from 'react-redux';
import App from './App';

export default function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
