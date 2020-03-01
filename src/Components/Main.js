import React from 'react';
import styled from 'styled-components';
import Results from './Results';
import Items from './Items';


export default ({items, results}) => {
  return (
    {items.length > 0 && 
      <Main>
        <Items items={items} />
        <Results results={results} />
      </Main>
    } 
  )
}

const Main = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 15px;
`