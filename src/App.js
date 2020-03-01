import React, { useState } from 'react';
import './App.css';
import FileInput from './Components/FileInput';
import Results from './Components/Results';
import Items from './Components/Items';
import styled from 'styled-components';


const App = () => {
  const [items, setItems] = useState([])
  const [results, setResults] = useState({})

  const handleUpload = (payload) => {
    compute(payload).then(res => {
      setResults(res);
      setItems(payload)
    })
  }

  const compute = (payload) => {
    return new Promise((resolve, reject) => {
      let res = {
        dg: payload.filter(({ item }) => item.includes('DG')).reduce((total, itm) => total + Number(itm.time), 0),
        pp: payload.filter(({ item }) => item.includes('PRG')).reduce((total, itm) => total + Number(itm.time), 0),
        pt: payload.filter(({ item }) => item.includes('PHG')).reduce((total, itm) => total + Number(itm.time), 0),
        bg: payload.filter(({ item }) => item.includes('BG')).reduce((total, itm) => total + Number(itm.time), 0),
      }
      resolve(res)
      reject(error => console.log(error, 'error'))
    })
  }

  return (
    <AppWrapper>
      <header className="App-header">
        <h1>Generate labor hours</h1>
      </header>
      <FileInput handleUpload={handleUpload} />
      {items.length > 0 && 
        <Main>
          <Items items={items} />
          <Results results={results} />
        </Main>
      } 
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  color:#2d3436;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: 800px;
  h1 {
    text-align: center; 
  }
  input {
    border: 1px solid gray;
    font-size: 18px;
    border-radius: 2px;
  }

`

const Main = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-gap: 15px;
`

export default App;
