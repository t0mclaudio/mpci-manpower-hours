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
          <Results results={results} items={items.length} />
        </Wrapper>
      }
    </div>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-gap: 15px;
`