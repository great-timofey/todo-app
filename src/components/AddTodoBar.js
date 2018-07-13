import React, { Component } from 'react';
import styled from 'styled-components';
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

const DateContainer = styled.div`
  margin: 0 auto;
`;

const DateLabel = styled.span`
  margin-right: 10px;
  font-size: 18px;
  font-style: italic;
`

const DateInput = styled.input.attrs({
  type: 'date',
})`
  align-self: flex-end;
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
  color: #AAFF00;
  border: 1px solid #AAFF00;
  background-color: black;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
    color: black;
    background-color: #AAFF00;
    transition: 0.2s;
  }
`;

class AddTodoBar extends Component {
  constructor() {
    super();

    this.state = {
      currentPriority: 'Normal',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.nameInput = null; 
    this.descInput = null;
    this.dateInput = null;
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
          <DateContainer>
            <DateLabel>Date To Finish</DateLabel>
            <DateInput 
              innerRef={node => this.dateInput = node}
            />
          </DateContainer>
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
    const { nameInput, descInput, dateInput } = this;
    if (!nameInput.value.trim() || !descInput.value.trim()) { return; }
    addTodo(nameInput.value, descInput.value, currentPriority, dateInput.value);
    nameInput.value = '';
    descInput.value = '';
    dateInput.value = '';
  }
};

export default connect(null, { addTodo })(AddTodoBar);
