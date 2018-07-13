import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { setFilter } from '../AC';
import { Filters } from './constants';

const FiltersContainer = styled.div`
  display: flex;
  margin: 0 auto 10px;
  justify-content: center;
  width: 50%;
`;

const Button = styled.button`
  width: 20%;
  margin-right: 5px
  font-size: 12px;
  border-radius: 5px;
  padding: 3px;
  transition: 0.2s;
  background-color: #C9F9FF;
  &:hover {
    cursor: pointer;
    background-color: #90D7FF;
    transition: 0.2s;
  }
`;


const FiltersPanel = ({ setFilter }) => {
  return (
    <FiltersContainer>
      <Button 
        onClick={() => setFilter(Filters.SHOW_ALL)}
      >
        Show All
      </Button>
      <Button
        onClick={() => setFilter(Filters.SHOW_ACTIVE)}
      >
        Show Active
      </Button>
      <Button
        onClick={() => setFilter(Filters.SHOW_COMPLETED)}
      >
        Show Completed
      </Button>
      <Button
        onClick={() => setFilter(Filters.SHOW_HIGH)}
      >
        Show High
      </Button>
      <Button
        onClick={() => setFilter(Filters.SHOW_HIGHEST)}
      >
        Show Highest
      </Button>
    </FiltersContainer>
  )
};

export default connect(null, { setFilter }) (FiltersPanel);
