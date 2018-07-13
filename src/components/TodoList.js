import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Todo from './Todo';
import { connect } from 'react-redux';
import { Filters } from './constants';

const List = styled.ul`
  list-style: none
  padding: 0
  width: 50%
  margin: 0 auto 20px
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

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case Filters.SHOW_ALL:
      return todos;
    case Filters.SHOW_ACTIVE: 
      return todos.filter(item => item.completed !== true);
    case Filters.SHOW_COMPLETED:
      return todos.filter(item => item.completed === true);
  }
}

export default connect((state) => ({
  todos: getVisibleTodos(state.todos, state.filters)
})) (TodoList);
