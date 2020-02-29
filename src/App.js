import React, { useState } from 'react';
import Papa from 'papaparse'

function App() {
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
  console.log(results)
  console.log(items)
  return (
    <div className="App">
      <header className="App-header">
        <p>Generate labor hours</p>
      </header>

      <FileInput handleUpload={handleUpload} />

      <div style={{ display: 'flex' }}>
        <table border={1} style={{ borderCollapse: 'collapse', border: '1px solid white', margin: '15px 0', fontSize: '16px' }}>
          <thead>
            <tr>
              <th style={{ width: '200px' }}>Name</th>
              <th style={{ width: '100px' }}>Time</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{ padding: '5px' }}>{item.item}</td>
                  <td style={{ padding: '5px' }}>{item.time} hours</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div style={{ textAlign: 'left' }}>
          <h2>Results</h2>
          <dl>
            <dt style={styles.dt}>Design Group</dt>
            <dd style={styles.dd}>{results.dg} hours</dd>
            <dt style={styles.dt}>Production Group</dt>
            <dd style={styles.dd}>{results.pp} hours</dd>
            <dt style={styles.dt}>Binding Group</dt>
            <dd style={styles.dd}>{results.bg} hours</dd>
          </dl>
        </div>
      </div>
    </div>
  );
}

const styles = {
  dt: {
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  dd: {
    margin: '0 15px',
    padding: '0 0 5px 0',
  }
}


const FileInput = ({ handleUpload }) => {
  const fileInput = React.createRef()

  const handleSubmit = (e) => {
    e.preventDefault();
    let file = fileInput.current.files[0];
    Papa.parse(file, {
      header: true,
      complete: function (results) {
        handleUpload(results.data);
      }
    })




  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputFile">Upload file</label>
      <input type="file" ref={fileInput} />
      <input type="submit" value="Submit" />
    </form>
  )
}

export default App;
