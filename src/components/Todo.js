import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../AC';
import ModifyTodo from './ModifyTodo';

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
  position: relative;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

const RemoveButton = styled.button`
  width: 100%;
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

const ModifyButton = RemoveButton.extend`
  &:hover {
    background-color: green;
  }
`;

const TodoName = styled.h2`
  font-size: 22px;
`;
const TodoDesc = styled.p`
  max-width: 50%;
  font-size: 18px;
  text-align: justify;
`;
const TodoDate = styled.span`
  font-size: 10px;
  color: ${TodoContainer.color};
`;

const TodoStatusBox = styled.input.attrs({
  type: 'checkbox'
})`
`;


class Todo extends Component {
  constructor() {
    super();

    this.state = {
      isModified: false
    };
  }

  render() {
    const { id, name, desc, priority, completed, date } = this.props;
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
        <ButtonContainer>
          <ModifyButton
            onClick={() => this.setState({
              isModified: true
            })} 
          >
            Modify
          </ModifyButton>
          <RemoveButton 
            onClick={this.handleDelete} 
          >
            Remove
          </RemoveButton>
        </ButtonContainer>
        <ModifyTodo 
          show={this.state.isModified}
          id={id}
          name={name}
          desc={desc}
          date={date}
          priority={priority}
          callback={this.handleCompleteModify}
        />
      </TodoContainer>
    )
  };

  handleDelete = () => {
    const { removeTodo, id } = this.props;
    removeTodo(id);
  };

  handleCheck = () => {
    const { toggleTodo, id } = this.props;
    toggleTodo(id);
  }

  handleCompleteModify = () => {
    this.setState({
      isModified: false
    })
  }
};

export default connect(null, { removeTodo, toggleTodo })(Todo);


