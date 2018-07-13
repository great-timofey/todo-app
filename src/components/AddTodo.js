import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { addTodo, setPriority } from '../AC';
import { connect } from 'react-redux';

const AddTodoContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Input = styled.input`
  font-size: 15px;
  margin-right: 20px;
  margin-bottom: 5px;
  text-align: center;
`;

const ImportanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

let radioCount = 0;
const ImportanceRadio = styled.input.attrs({
  type: 'radio',
  name: 'importance',
  id: () => `radio${++radioCount}`
})`
`;

const ImportanceLabel = styled.label`
  width: 100px;
  margin-bottom: 5px
`;

const ParamsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
      currentPriority: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    let nameInput, descInput;

    return (
      <AddTodoContainer>
        <ParamsContainer>
          <Input 
            placeholder='name...' 
            innerRef={node => nameInput = node}
          />
          <Input 
            placeholder='description...' 
            innerRef={node => descInput = node}
          />
          <ImportanceContainer>
            <ImportanceLabel>
              <ImportanceRadio 
                defaultChecked
                onChange={this.handleChange}
                value={'Normal'}
              />
              Normal
            </ImportanceLabel>
            <ImportanceLabel>
              <ImportanceRadio 
                onChange={this.handleChange}
                value={'High'}
              />
              High
            </ImportanceLabel>
            <ImportanceLabel>
              <ImportanceRadio 
                onChange={this.handleChange}
                value={'Highest'}
              />
              Highest
            </ImportanceLabel>
          </ImportanceContainer>
        </ParamsContainer>
        <AddButton 
          onClick={() => {
              if (!nameInput.value.trim() || !descInput.value.trim()) { return; }
              this.props.setPriority(this.state.currentPriority);
              this.props.addTodo(nameInput.value, descInput.value, this.state.currentPriority);
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

export default connect(null, { addTodo, setPriority })(AddTodo);
