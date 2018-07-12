import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import { addTodo } from '../AC';
import { connect } from 'react-redux';

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

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <AddTodoContainer>
      <Input 
        placeholder='new todo here...' 
        innerRef={node => input = node}
      />
      <Button 
        text='Add Todo' 
        onClick={() => {
            if (!input.value.trim()) { return; }
            dispatch(addTodo(input.value));
            input.value = '';
          }
        } 
      />
    </AddTodoContainer>
  )
};

export default connect()(AddTodo);
