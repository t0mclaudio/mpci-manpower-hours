import React from 'react';
import styled from 'styled-components';
import Pie from './Pie';

export default ({ results, items }) => {
  const total = Object.values(results).reduce((total,item)=>total+item,0);
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th colSpan={2}>Results</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Design Group</td>
            <td style={{ textAlign: 'right' }}>{results.dg} hours</td>
          </tr>
          <tr>
            <td>Photography Group</td>
            <td style={{ textAlign: 'right' }}>{results.pt} hours</td>
          </tr>
          <tr>
            <td>Production Group</td>
            <td style={{ textAlign: 'right' }}>{results.pp} hours</td>
          </tr>
          <tr>
            <td>Binding Group</td>
            <td style={{ textAlign: 'right' }}>{results.bg} hours</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total hours</strong></td>
            <td style={{ textAlign: 'right' }}><strong>{total} work hours</strong></td>
          </tr>
          <tr>
            <td><strong>Total records</strong></td>
            <td style={{ textAlign: 'right' }}><strong>{items}</strong></td>
          </tr>
        </tfoot>
      </Table>
      <Pie results={results} />
    </div>
  )
}


const Table = styled.table`
  width: 100%;
  border-collapse: collapse; 
  border: 1px solid gray; 
  margin: 15px 0; 
  font-size: 16px;
  tr, td, th {
    padding: 4px;
    border: 1px solid gray; 
  };
`