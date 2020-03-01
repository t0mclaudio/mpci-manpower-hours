import React from 'react';
import styled from 'styled-components';

export default ({ results }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={2}>Results</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Design Group</td>
          <td style={{textAlign: 'right' }}>{results.dg} hours</td>
        </tr>
        <tr>
          <td>Photography Group</td>
          <td style={{textAlign: 'right' }}>{results.pt} hours</td>
        </tr>
        <tr>
          <td>Production Group</td>
          <td style={{textAlign: 'right' }}>{results.pp} hours</td>
        </tr>
        <tr>
          <td>Binding Group</td>
          <td style={{textAlign: 'right' }}>{results.bg} hours</td>
        </tr>
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
  };
`