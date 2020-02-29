import React, { useState } from 'react';
import FileInput from './Components/FileInput';
import Results from './Components/Results';
import Items from './Components/Items';


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
    <div className="App">
      <header className="App-header">
        <p>Generate labor hours</p>
      </header>
      <FileInput handleUpload={handleUpload} />
      <div style={{ display: 'flex' }}>
        <Items items={items} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
