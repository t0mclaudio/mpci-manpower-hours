import React from 'react';
import styled from 'styled-components';

export default ({ items }) => {
  return (
    <Table border={1}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time</th>
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
    </Table>
  )
}

const Table = styled.table`
  border-collapse: collapse; 
  border: 1px solid gray; 
  margin: 15px 0; 
  font-size: 16px;
  tr, td, th {
    border: 1px solid gray; 
  }
`