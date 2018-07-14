import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modifyTodo } from '../AC';

const ModifyZone = styled.div`
  display: ${(props) => props.active ? 'block' : 'none'};
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 120%;
  background-color: rgba(145,232,66,1);
  color: white;
  border-radius: 10px;
`;

const FinishButton = styled.button`
  position: absolute;
  width: 25%;
  font-size: 12px;
  border-radius: 5px;
  transition: 0.1s;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  background-color: green;
  color: white;
  bottom: -40px;
  &:hover {
    cursor: pointer;
    background-color: lime;
    color: black;
    transition: 0.1s;
  }
`;

const ModifyHeader = styled.h2`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 5px;
`;

const ModifyInput = styled.input`
  text-align: center;
`;

const InputLabel = styled.label`
  font-size: 14px;
  color: black;
  font-style: italic;
`

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
`;

class ModifyTodo extends Component {
  constructor() {
    super();

    this.nameInput = null;
    this.descInput = null;
    this.dateInput = null;
  }

  handleModify = () => {
    const { nameInput, descInput, dateInput } = this;
    const { id, modifyTodo, priority, callback } = this.props;
    modifyTodo(id, nameInput.value, descInput.value, priority, dateInput.value);
    callback();
  }

  render() {
    const { show, name, desc, creationDate, priority } = this.props;
    return (
      <ModifyZone active={show} >
        <ModifyHeader>Modify Todo</ModifyHeader>
        <Container>
          <InputLabel>
            Name&nbsp;
            <ModifyInput
              type='text'
              defaultValue={name}
              innerRef={node => this.nameInput = node}
            />
          </InputLabel>
          <InputLabel>
            Description&nbsp;
            <ModifyInput 
              type='text' 
              defaultValue={desc}
              innerRef={node => this.descInput = node}
            />
          </InputLabel>
          <InputLabel>
            Date&nbsp;   
            <ModifyInput 
              type='date'
              defaultValue={creationDate}
              innerRef={node => this.dateInput = node}
            />
          </InputLabel>
          <FinishButton onClick={this.handleModify} >
            Complete Modification
          </FinishButton>
        </Container>
      </ModifyZone>
    )
  }
}


export default connect(null, { modifyTodo })(ModifyTodo);
