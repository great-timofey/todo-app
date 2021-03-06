import React, { Component } from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import { connect } from 'react-redux';
import { Filters } from '../constants';

const List = styled.ul`
  list-style: none
  padding: 0
  width: 75%
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
            {...todo}
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
    case Filters.SHOW_NORMAL:
      return todos.filter(item => item.priority === 'Normal');
    case Filters.SHOW_HIGH:
      return todos.filter(item => item.priority === 'High');
    case Filters.SHOW_HIGHEST:
      return todos.filter(item => item.priority === 'Highest');
  }
}

export default connect((state) => ({
  todos: getVisibleTodos(state.todos, state.filter)
})) (TodoList);
