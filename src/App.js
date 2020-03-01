import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import FileInput from './Components/FileInput';
import Main from './Components/Main';

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
      <Header>Generate labor hours</Header>
      <FileInput handleUpload={handleUpload} />
      <Main items={items} results={results} />
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
`

const Header = styled.h1`
    text-align: center; 
`

export default App;
