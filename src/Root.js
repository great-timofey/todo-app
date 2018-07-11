import React, { Component } from 'react';
import store from './stores';
import { Provider } from 'react-redux';
import App from './App';

export default function Root(props) {
  return (
    <Provider store = { store }>
      <App props = { props } />
    </Provider>
  )
}
