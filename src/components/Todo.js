import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

const ItemContainer = styled.li`
  background-color: cyan;
  padding: 5px;
  text-align: center;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  font-size: 12px;
  border-radius: 5px;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    color: yellow;
    background-color: red;
    transition: 0.1s;
  }
`;

const Item = ({ text, key, dispatch }) => {
  return (
    <ItemContainer>
      {text}
      <Button 
        onClick={() => {
            dispatch(this.props.addTodo(key));
          } 
        }
      >
        x
      </Button>
    </ItemContainer>
  )
};

export default connect()(Item);


