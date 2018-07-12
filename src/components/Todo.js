import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import { connect } from 'react-redux';

const ItemContainer = styled.li`
  background-color: cyan
  padding: 5px
  text-align: center
  margin-bottom: 5px
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
        Remove Todo
      </Button>
    </ItemContainer>
  )
};

export default connect()(Item);


