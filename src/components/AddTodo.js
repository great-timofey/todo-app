import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { addTodo } from '../AC';
import { connect } from 'react-redux';

const AddTodoContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  font-size: 15px;
  margin-right: 20px;
  text-align: center;
`;

const AddButton = styled.button`
  font-size: 18px;
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
    color: white;
    background-color: black;
    transition: 0.2s;
  }
`;

const AddTodo = ({ addTodo }) => {
  let input;

  return (
    <AddTodoContainer>
      <Input 
        placeholder='new todo here...' 
        innerRef={node => input = node}
      />
      <AddButton 
        onClick={() => {
            if (!input.value.trim()) { return; }
            addTodo(input.value);
            input.value = '';
          }
        } 
      >
        Add Todo
      </AddButton>
    </AddTodoContainer>
  )
};

export default connect(null, { addTodo })(AddTodo);
