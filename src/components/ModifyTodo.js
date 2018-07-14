import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modifyTodo } from '../AC';

const ModifyZone = styled.div`
  display: ${(props) => props.active ? 'block' : 'none'};
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;
`;

const FinishButton = styled.button`
  width: 25%;
  font-size: 12px;
  border-radius: 5px;
  transition: 0.1s;
  margin-left: auto;
  top: 50%;
  right: 10%;
  transform: translateY(-50%);
  &:hover {
    cursor: pointer;
    color: white;
    background-color: green;
    transition: 0.1s;
  }
`;

const ModifyHeader = styled.h2`
  font-size: 13px;
  font-weight: bold;
  margin: 0 0 5px;
`;

const ModifyInput = styled.input`
  display: block;
`;

class ModifyTodo extends Component {
  constructor() {
    super();

    this.nameInput = null;
    this.descInput = null;
    this.dateInput = null;
    this.prior = null;
  }

  handleModify = () => {
    const { nameInput, descInput, dateInput } = this;
    const { id, modifyTodo, callback } = this.props;
    modifyTodo(id, nameInput.value, descInput.value, 'Normal', dateInput.value);
    callback();
  }

  render() {
    const { show, name, desc, date, priority, callback } = this.props;
    return (
      <ModifyZone active={show} >
        <ModifyHeader>Modify Todo</ModifyHeader>
        <ModifyInput
          type='text'
          defaultValue={name}
          innerRef={node => this.nameInput = node}
        />
        <ModifyInput 
          type='text' 
          defaultValue={desc}
          innerRef={node => this.descInput = node}
        />
        <ModifyInput 
          type='date'
          defaultValue={date}
          innerRef={node => this.dateInput = node}
        />
        <FinishButton onClick={this.handleModify} >
          Complete Modification
        </FinishButton>
      </ModifyZone>
    )
  }
}


export default connect(null, { modifyTodo })(ModifyTodo);
