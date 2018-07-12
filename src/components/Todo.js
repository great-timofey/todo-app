import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const Item = styled.li`
  background-color: cyan
  padding: 5px
  text-align: center
  margin-bottom: 5px
`;

export default ({ name }) => {
  return <Item>{name}</Item>;
}
