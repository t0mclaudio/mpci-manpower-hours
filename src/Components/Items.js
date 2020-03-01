import React from 'react';
import styled from 'styled-components';

export default ({ items }) => {
  return (
    <Table border={1}>
      <thead>
        <tr>
          <th></th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          if (index > 20 ) return;
          return (
            <tr key={item.id}>
              <td>{item.job}</td>
              <td style={{ textAlign: 'right' }}>{item.time} hours</td>
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
    padding: 4px;
    border: 1px solid gray; 
  } 
`