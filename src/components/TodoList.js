import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Todo from './Todo';

const List = styled.ul`
  list-style: none
  padding: 0
  width: 50%
  margin: 0 auto
  font-size: 20px
`;

export default class TodoList extends Component {
  render() {
    return (
      <List>
        <Todo name='mock1' /> 
        <Todo name='mock1' /> 
      </List>
    )
  }
}
