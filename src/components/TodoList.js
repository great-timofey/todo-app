import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Todo from './Todo';
import { removeTodo } from '../AC';
import { connect } from 'react-redux';

const List = styled.ul`
  list-style: none
  padding: 0
  width: 50%
  margin: 0 auto
  font-size: 20px
`;

const TodoList = ({ todos }) => {
  return (
    <List>
      { 
        todos.map(( todo, key ) => 
          <Todo 
            key={key}
            text={todo.text}
          />
        ) 
      }
    </List>
  )
}

export default connect((state) => ({
  todos: state.todos
}), { removeTodo }) (TodoList);
