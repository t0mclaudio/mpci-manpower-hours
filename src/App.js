import React, { useState } from 'react';
import styled from 'styled-components';
import './App.css';
import FileInput from './Components/FileInput';
import Main from './Components/Main';
import { CSSTransition } from 'react-transition-group';

const App = () => {
  const [items, setItems] = useState([])
  const [results, setResults] = useState({})

  const handleUpload = (payload) => {
    compute(payload).then(response => {
      setResults(response);
      setItems(payload)
    }).catch((e) => {
      console.log(e);
    })
  }

  const compute = (payload) => {
    return new Promise((resolve, reject) => {
      const jobs = {
        DG: filterByJobType(payload,'DG'),
        PRG: filterByJobType(payload,'PRG'),
        PHG: filterByJobType(payload,'PHG'),
        BG: filterByJobType(payload,'BG'),
      }
      const hours = {
        DG: getHours(jobs.DG),
        PRG: getHours(jobs.PRG),
        PHG: getHours(jobs.PHG),
        BG: getHours(jobs.BG),
      }

      resolve({jobs, hours})
      reject(error => console.log(error, 'error'))
    })
  }

  const filterByJobType = (payload, id) => {
    return payload.filter(({job}) => job.includes(id))
  }

  const getHours = (jobs) => {
    return jobs.reduce((total, item) => total + Number(item.time), 0)
  }

  return (
    <AppWrapper>
      <Header>Compute Manpower Hours</Header>
      <FileInput handleUpload={handleUpload} />
      <CSSTransition
        in={items.length > 0}
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
  width: 960px;
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
