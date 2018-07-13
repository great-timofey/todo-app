import React, { Component } from 'react';
import styled from 'styled-components';

const PriorityContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  margin: 0 auto;
`;

const PriorityLegend = styled.h2`
  font-size: 18px;
  font-style: italic;
  margin-right: 10px;
`;

let radioCount = 0;
const PriorityRadio = styled.input.attrs({
  type: 'radio',
  name: 'importance',
  id: () => `radio${++radioCount}`
})`
`;

const PriorityLabel = styled.label`
  margin-bottom: 5px;
  margin-right: 5px;
  font-size: 16px;
`;

export default ({ handleChange }) => {
  return (
    <PriorityContainer>
      <PriorityLegend>Priority</PriorityLegend>
      <PriorityLabel>
        <PriorityRadio 
          defaultChecked
          onChange={handleChange}
          value={'Normal'}
        />
        Normal
      </PriorityLabel>
      <PriorityLabel>
        <PriorityRadio 
          onChange={handleChange}
          value={'High'}
        />
        High
      </PriorityLabel>
      <PriorityLabel>
        <PriorityRadio 
          onChange={handleChange}
          value={'Highest'}
        />
        Highest
      </PriorityLabel>
    </PriorityContainer>
  )
}
