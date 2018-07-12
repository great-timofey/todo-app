import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../AC';

const TodoContainer = styled.li.attrs({
  style: props => ({
    textDecorationLine: props.active ? 'line-through' : 'none',
  })
})`
  padding: 5px;
  text-align: center;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const RemoveButton = styled.button`
  font-size: 12px;
  border-radius: 5px;
  transition: 0.1s;
  margin-left: auto;
  position: relative;
  &:hover {
    cursor: pointer;
    color: white;
    background-color: red;
    transition: 0.1s;
  }
`;

const TodoStatusBox = styled.input.attrs({
  type: 'checkbox'
})`

`;

class Todo extends Component {
  render() {
    const { text, isChecked } = this.props;
    return (
      <TodoContainer 
        active={isChecked}
      >
        {text}
        <RemoveButton 
          onClick={this.handleDelete} 
        >
          Remove
        </RemoveButton>
        <TodoStatusBox 
          checked={isChecked}
          onChange={this.handleCheck} 
        />
      </TodoContainer>
    )
  };

  handleDelete = () => {
    const { removeTodo, id } = this.props;
    removeTodo(id);
  }

  handleCheck = () => {
    const { toggleTodo, id } = this.props;
    toggleTodo(id);
  }
};

export default connect(null, { removeTodo, toggleTodo })(Todo);


