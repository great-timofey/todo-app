import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { setFilter } from '../AC';
import { Filters } from './constants';

const FiltersContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  width: 50%;
`;

const GenericButton = styled.button`
  font-size: 12px;
  border-radius: 5px;
  padding: 3px;
  transition: 0.2s;
  color: black;
  &:hover {
    cursor: pointer;
    border: 1px solid black;
    color: white;
    background-color: black;
    transition: 0.2s;
  }
`;

const ShowAllButton = GenericButton.extend`
  background-color: yellow;
`;

const ShowActiveButton = GenericButton.extend`
  background-color: cyan;
`; 

const ShowCompletedButton = GenericButton.extend`
  background-color: violet;
`; 

const FiltersPanel = ({ setFilter }) => {
  return (
    <FiltersContainer>
      <ShowAllButton 
        onClick={() => setFilter(Filters.SHOW_ALL)}
      >
        Show All
      </ShowAllButton>
      <ShowActiveButton
        onClick={() => setFilter(Filters.SHOW_ACTIVE)}
      >
        Show Active
      </ShowActiveButton>
      <ShowCompletedButton
        onClick={() => setFilter(Filters.SHOW_COMPLETED)}
      >
        Show Completed
      </ShowCompletedButton>
    </FiltersContainer>
  )
};

export default connect(null, { setFilter }) (FiltersPanel);
