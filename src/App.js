import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import FiltersPanel from './components/FiltersPanel';

injectGlobal`
  body {
    font-family: system-ui;
    margin: 0;
  }
`;

const AppContainer = styled.section`
  height: 100vh
`;

const AppHeader = styled.h1`
  font-size: 25px
  text-align: center
`;

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>My Todo App</AppHeader>
        <AddTodo />
        <TodoList />
        <FiltersPanel />
      </AppContainer>
    );
  }
}

