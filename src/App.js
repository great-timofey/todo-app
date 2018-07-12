import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const AppContainer = styled.section`
  height: 100vh
`

const AppHeader = styled.h1`
  font-size: 25px
  text-align: center
  font-family: system-ui
`;

export default class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>My Todo App</AppHeader>
        <AddTodo />
        <TodoList />
      </AppContainer>
    );
  }
}

