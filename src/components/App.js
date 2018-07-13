import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import FiltersPanel from './FiltersPanel';

injectGlobal`
  body {
    font-family: system-ui;
    margin: 0;
    background: linear-gradient(to right, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
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
        <FiltersPanel />
        <TodoList />
      </AppContainer>
    );
  }
}

