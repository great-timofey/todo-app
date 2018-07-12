import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';

const AddTodoContainer = styled.div`
  padding: 20px
  display: flex
  justify-content: center
`;

const Input = styled.input`
  font-size: 15px
  margin-right: 20px
  text-align: center
`;

export default class AddTodo extends Component {
  render() {
    return (
      <AddTodoContainer>
        <Input placeholder='new todo here...' />
        <Button text='Add' />
      </AddTodoContainer>
    )
  }
}
