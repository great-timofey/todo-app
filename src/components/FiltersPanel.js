import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { showAll, showUncompleted, showCompleted } from '../AC';

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

const ShowUncompletedButton = GenericButton.extend`
  background-color: cyan;
`; 

const ShowCompletedButton = GenericButton.extend`
  background-color: violet;
`; 

const FiltersPanel = ({ showAll, showUncompleted, showCompleted }) => {
  return (
    <FiltersContainer>
      <ShowAllButton 
        onClick={showAll}
      >
        Show All
      </ShowAllButton>
      <ShowUncompletedButton
        onClick={showUncompleted}
      >
        Show Uncompleted
      </ShowUncompletedButton>
      <ShowCompletedButton
        onClick={showCompleted}
      >
        Show Uncompleted
      </ShowCompletedButton>
    </FiltersContainer>
  )
};

export default connect(null, { showAll, showCompleted, showUncompleted }) (FiltersPanel);
