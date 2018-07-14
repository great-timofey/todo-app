import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../AC';
import ModifyTodo from './ModifyTodo';

const TodoContainer = styled.li.attrs({
  style: props => ({
    backgroundColor: props.active ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
    color: (new Date(props.date) < new Date() ? 'red' : 'black'),
    borderTop: props.active ? '1px solid blue' : '1px solid white',
    borderBottom: props.active ? '1px solid blue' : '1px solid white'
  })
})`
  padding: 5px;
  text-align: center;
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
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
  transform: scale(2.0);
  margin-left: 10px;
`;

const Overlay = styled.div`
  display: ${props => props.active ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  filter: blur(20px);
  z-index: 3;
`;

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      isModified: false
    };
  }

  render() {
    const { id, name, desc, priority, completed, deadline, completionDate } = this.props;
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
        date={deadline}
      >
        <TodoStatusBox 
          checked={completed}
          onChange={this.handleCheck} 
        />
        <TodoName>{`${prioritySign} ${name}`}</TodoName>
        <TodoDesc>{desc}</TodoDesc>
        <TodoDate>{`deadline: ${deadline ? deadline : 'none'}`}</TodoDate>
        <TodoDate>{`completed: ${completionDate ? completionDate : 'no'}`}</TodoDate>
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
          deadline={deadline}
          priority={priority}
          callback={() => this.setState({
            isModified: false
          })}
        />
        <Overlay 
          active={this.state.isModified}
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
    toggleTodo(id, new Date().toISOString().slice(0,10));
  }
};

export default connect(null, { removeTodo, toggleTodo })(Todo);


