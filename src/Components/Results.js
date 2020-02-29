import React from 'react';
import styled from 'styled-components';

export default ({ results }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th colspan={2}>Results</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Design Group</td>
          <td>{results.dg}</td>
        </tr>
        <tr>
          <td>Photography Group</td>
          <td>{results.pt}</td>
        </tr>
        <tr>
          <td>Production Group</td>
          <td>{results.pp}</td>
        </tr>
        <tr>
          <td>Binding Group</td>
          <td>{results.bg}</td>
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