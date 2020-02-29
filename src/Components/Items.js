import React from 'react';

export default ({items}) => {
  return (
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
  )
}