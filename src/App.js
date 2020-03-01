import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import FileInput from './Components/FileInput';
import Main from './Components/Main';
import { CSSTransition } from 'react-transition-group';

const App = () => {
  const [ready, setReady] = useState(false)
  const [items, setItems] = useState([])
  const [results, setResults] = useState({})

  const handleUpload = (payload) => {
    setItems(payload)
    compute(payload).then(res => {
      setResults(res);
    }).then(() => {
      setReady(true);
    }).catch((e) => {
      console.log(e);
    })
  }

  const compute = (payload) => {
    return new Promise((resolve, reject) => {
      let res = {
        dg: getHours(payload,'DG'),
        pp:  getHours(payload,'PRG'),
        pt:  getHours(payload,'PHG'),
        bg:  getHours(payload,'BG'),
      }
      resolve(res)
      reject(error => console.log(error, 'error'))
    })
  }

  const getHours = (payload, id) => {
    return payload.filter(({ item }) => item.includes(id))
                  .reduce((total, itm) => total + Number(itm.time), 0)
  }

  return (
    <AppWrapper>
      <Header>Generate labor hours</Header>
      <FileInput handleUpload={handleUpload} />
      <CSSTransition
        in={ready}
        timeout={200}
        classNames="main"
      >
        <Main items={items} results={results} />
      </CSSTransition>
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
  .main-enter {
    overflow: hidden;
    opacity: 0;
    transform: scaleY(0);    
    transform-origin: top;
  }

  .main-enter.main-enter-active {
    opacity: 1;
    transform: scaleY(1);
    transition: all 100ms ease-in;
  }

  .main-leave {
    opacity: 1;
  }

  .main-leave.main-leave-active {
    opacity: 0.01;
    transition: opacity 200ms ease-in;
  } 
`

const Header = styled.h1`
    text-align: center; 
`

export default App;
