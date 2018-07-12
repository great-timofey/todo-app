import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: 18px
  border-radius: 5px
  padding: 5px
  transition: 0.2s
  &:hover {
    cursor: pointer
    border: 1px solid black
    color: white
    background-color: black
    transition: 0.2s
  }
`

export default ({ text }) => {
  return <Button>{text}</Button>
}
