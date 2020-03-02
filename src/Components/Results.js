import React from 'react';
import styled from 'styled-components';
import Pie from './Pie';
import numeral from 'numeral';

export default ({ results, items }) => {
  const total = Object.values(results).reduce((total,item)=>total+item,0);
  const colors = {
    DG:'#FF6384',
    PHG:'#36A2EB',
    PRG:'#FFCE56',
    BG:'silver',
  }
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
            <td><Swatch color={colors.DG}/>  Design Group</td>
            <td style={{ textAlign: 'right' }}>{numeral(results.dg).format('0,0')} hours</td>
          </tr>
          <tr>
            <td><Swatch color={colors.PHG} />  Photography Group</td>
            <td style={{ textAlign: 'right' }}>{numeral(results.pt).format('0,0')} hours</td>
          </tr>
          <tr>
            <td><Swatch color={colors.PRG} />  Production Group</td>
            <td style={{ textAlign: 'right' }}>{numeral(results.pp).format('0,0')} hours</td>
          </tr>
          <tr>
            <td><Swatch color={colors.BG} />  Binding Group</td>
            <td style={{ textAlign: 'right' }}>{numeral(results.bg).format('0,0')} hours</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td><strong>Total hours</strong></td>
            <td style={{ textAlign: 'right' }}><strong>{numeral(total).format('0,0')} work hours</strong></td>
          </tr>
          <tr>
            <td><strong>Total records</strong></td>
            <td style={{ textAlign: 'right' }}><strong>{numeral(items).format('0,0')}</strong></td>
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

const Swatch = styled.div`
  display: inline-block;
  border-radius: 50%;
  border: 1px solid gray;
  width: 10px;
  height: 10px;
  background-color: ${props => props.color}
`