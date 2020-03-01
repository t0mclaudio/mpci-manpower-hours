import React from 'react';
import styled from 'styled-components';
import Results from './Results';
import Items from './Items';

export default ({ items, results }) => {

  return (
    <div>
      {items.length > 0 &&
        <Wrapper>
          <Items items={items} />
          <Results results={results} />
        </Wrapper>
      }
    </div>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 15px;
`