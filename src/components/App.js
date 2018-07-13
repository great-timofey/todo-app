import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import AddTodoBar from './AddTodoBar';
import TodoList from './TodoList';
import FiltersBar from './FiltersBar';

injectGlobal`
  body {
    font-family: 'Titillium Web', sans-serif;
    margin: 0 auto;
    background: linear-gradient(to right, rgba(210,255,82,1) 0%, rgba(145,232,66,1) 100%);
  }
`;

const AppContainer = styled.section`
`;

const AppHeader = styled.h1`
  color: black;
  font-size: 35px;
  text-align: center;
  margin-bottom: 20px;
`;

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>My Todo App</AppHeader>
        <AddTodoBar />
        <FiltersBar />
        <TodoList />
      </AppContainer>
    );
  }
}

