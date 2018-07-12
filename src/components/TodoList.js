import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Todo from './Todo';
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
        todos.map( todo => 
          <Todo 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            isChecked={todo.completed}
          />
        ) 
      }
    </List>
  )
}

export default connect((state) => ({
  todos: state.todos
})) (TodoList);
