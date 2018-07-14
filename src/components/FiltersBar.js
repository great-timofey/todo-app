import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setFilter } from '../AC';
import { Filters } from '../constants';

const FiltersContainer = styled.div`
  display: flex;
  margin: 0 auto 10px;
  justify-content: center;
  width: 70%;
`;

const Button = styled.button.attrs({
  style: props => ({
    boxShadow: props.active ? 'none': '1px 1px 1px black',
    color: props.active ? 'white' : 'black',
    fontWeight: props.active ? 'bold' : 'normal' 
  })
})`
  width: 20%;
  margin-right: 5px
  font-size: 14px;
  border-radius: 5px;
  padding: 5px;
  transition: 0.2s;
  background-color: #3DCD3D;
  &:hover {
    cursor: pointer;
    background-color: #B3F6B3;
    transition: 0.2s;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;


const FiltersBar = ({ filter, setFilter }) => {
  return (
    <FiltersContainer>
      <Button 
        active={filter === Filters.SHOW_ALL}
        onClick={() => setFilter(Filters.SHOW_ALL)}
      >
        All
      </Button>
      <Button
        active={filter === Filters.SHOW_ACTIVE}
        onClick={() => setFilter(Filters.SHOW_ACTIVE)}
      >
        Active
      </Button>
      <Button
        active={filter === Filters.SHOW_COMPLETED}
        onClick={() => setFilter(Filters.SHOW_COMPLETED)}
      >
        Completed
      </Button>
      <Button
        active={filter === Filters.SHOW_NORMAL}
        onClick={() => setFilter(Filters.SHOW_NORMAL)}
      >
        Normal
      </Button>
      <Button
        active={filter === Filters.SHOW_HIGH}
        onClick={() => setFilter(Filters.SHOW_HIGH)}
      >
        High
      </Button>
      <Button
        active={filter === Filters.SHOW_HIGHEST}
        onClick={() => setFilter(Filters.SHOW_HIGHEST)}
      >
        Highest
      </Button>
    </FiltersContainer>
  )
};

export default connect(({ filter }) => ({ filter }), { setFilter }) (FiltersBar);
