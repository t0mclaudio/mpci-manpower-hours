import React, { useState } from 'react';

function App() {
  const division = ['DG', 'PP', 'PT', 'BG'];
  var initialItems = []
  for (let i = 1; i <= 50; i++) {
    initialItems = [...initialItems, {
      id: division[Math.floor(Math.random() * division.length)],
      name: `Sample text`,
      time: Math.floor((Math.random() * 20) + 1)
    }]
  }

  const [items] = useState(initialItems)

  const [results] = useState({
    dg: items.filter(item => item.id === 'DG').reduce((total, itm) => total + itm.time, 0),
    pp: items.filter(item => item.id === 'PP').reduce((total, itm) => total + itm.time, 0),
    pt: items.filter(item => item.id === 'PT').reduce((total, itm) => total + itm.time, 0),
    bg: items.filter(item => item.id === 'BG').reduce((total, itm) => total + itm.time, 0),
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>Generate labor hours</p>
      </header>
      <form>
        <input aria-label="submit file" type="file" />
      </form>
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
                  <td style={{ padding: '5px' }}>{item.id} {item.name}</td>
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

export default App;
