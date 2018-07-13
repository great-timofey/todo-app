import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { addTodo } from '../AC';
import { connect } from 'react-redux';
import PriorityBar from './PriorityBar';

const AddTodoContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
`;

const DataInput = styled.input`
  font-size: 15px;
  margin-bottom: 5px;
  text-align: center;
`;

const DataInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  width: 50%;
  margin: 0 auto;
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

class AddTodoBar extends Component {
  constructor() {
    super();

    this.state = {
      currentPriority: 'Normal'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.nameInput = null; 
    this.descInput = null;
  }

  render() {

    return (
      <AddTodoContainer>
        <DataInputContainer>
          <DataInput 
            placeholder='name...' 
            innerRef={node => this.nameInput = node}
          />
          <DataInput 
            placeholder='description...' 
            innerRef={node => this.descInput = node}
          />
        </DataInputContainer>
        <PriorityBar 
          handleChange={this.handleChange}
        />
        <AddButton 
          onClick={this.handleAdd} 
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
  };

  handleAdd = () => {
    const { addTodo } = this.props;
    const { currentPriority } = this.state;
    const { nameInput, descInput } = this;
    if (!nameInput.value.trim() || !descInput.value.trim()) { return; }
    addTodo(this.nameInput.value, this.descInput.value, currentPriority);
    nameInput.value = '';
    descInput.value = '';
  }
};

export default connect(null, { addTodo })(AddTodoBar);
