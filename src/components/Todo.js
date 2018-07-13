import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../AC';

const TodoContainer = styled.li.attrs({
  style: props => ({
    textDecorationLine: props.active ? 'line-through' : 'none',
    color: (new Date(props.date) < new Date() ? 'red' : 'black')
  })
})`
  padding: 5px;
  text-align: center;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
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

const TodoName = styled.h2`
  font-size: 22px;
  margin-right: 15px;
`
const TodoDesc = styled.p`
  max-width: 50%;
  font-size: 18px;
  text-align: justify;
  margin-right: 15px;
`
const TodoDate = styled.span`
  font-size: 10px;
  color: ${TodoContainer.color};
`

const TodoStatusBox = styled.input.attrs({
  type: 'checkbox'
})`
  margin-right: 15px;
`;

class Todo extends Component {
  render() {
    const { name, desc, priority, completed, date } = this.props;
    let prioritySign;
    switch ( priority ) {
      case 'High':
        prioritySign = '!';
        break;
      case 'Highest':
        prioritySign = '!!!';
        break;
      default:
        prioritySign = '';
    }

    return (
      <TodoContainer 
        active={completed}
        date={date}
      >
        <TodoStatusBox 
          checked={completed}
          onChange={this.handleCheck} 
        />
        <TodoName>
          {`${prioritySign} ${name}`}
        </TodoName>
        <TodoDesc> {desc} </TodoDesc>
        <TodoDate> {date} </TodoDate>
        <RemoveButton 
          onClick={this.handleDelete} 
        >
          Remove
        </RemoveButton>
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


