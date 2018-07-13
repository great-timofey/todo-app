import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { addTodo } from '../AC';
import { connect } from 'react-redux';
import PriorityBar from './PriorityBar';

const AddTodoContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const DataInput = styled.input`
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
`;

const ParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  max-width: 50%;
`;

const AddButton = styled.button`
  font-size: 18px;
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s;
  max-height: 50px;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
    color: white;
    background-color: black;
    transition: 0.2s;
  }
`;

class AddTodo extends Component {
  constructor() {
    super();

    this.state = {
      currentPriority: 'Normal'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let nameInput, descInput;

    return (
      <AddTodoContainer>
        <ParamsContainer>
          <DataInput 
            placeholder='name...' 
            innerRef={node => nameInput = node}
          />
          <DataInput 
            placeholder='description...' 
            innerRef={node => descInput = node}
          />
          <PriorityBar 
            handleChange={this.handleChange}
          />
        </ParamsContainer>
        <AddButton 
          onClick={() => {
              if (!nameInput.value.trim() || !descInput.value.trim()) { return; }
              const { addTodo } = this.props;
              const { currentPriority } = this.state;
              addTodo(nameInput.value, descInput.value, currentPriority);
              nameInput.value = '';
              descInput.value = '';
            }
          } 
        >
          Add Todo
        </AddButton>
      </AddTodoContainer>
    )
  }

  handleChange = (event) => {
    this.setState({
      currentPriority: event.target.value
    })
  }
};

export default connect(null, { addTodo })(AddTodo);
