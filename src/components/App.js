import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import AddTodoBar from './AddTodoBar';
import TodoListBar from './TodoListBar';
import FiltersBar from './FiltersBar';

injectGlobal`
  body {
    font-family: system-ui;
    margin: 0 auto;
    background: linear-gradient(to right, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
  }
`;

const AppContainer = styled.section`
  
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
        <AddTodoBar />
        <FiltersBar />
        <TodoListBar />
      </AppContainer>
    );
  }
}

