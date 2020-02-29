import React from 'react';

export default ({results}) => {
  return (
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
  )
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