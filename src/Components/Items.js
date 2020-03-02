import React from 'react';
import styled from 'styled-components';

export default ({ items }) => {
  const colors = {
    DG:'#FF6384',
    PHG:'#36A2EB',
    PRG:'#FFCE56',
    BG:'silver',
  }
  return (
    <Table border={1}>
      <thead>
        <tr>
          <th>Job</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => {
          if (index > 20 ) return;
          let key;
          Object.keys(colors).forEach(k => {
            if (item.job.includes(k)) {
              key = k
            }
          })
          return (
            <tr key={item.id}>
              <td><Swatch color={colors[key]} />  {item.job}</td>
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
  border-radius: 2px;
  margin: 15px 0; 
  font-size: 16px;
  tr, td, th {
    padding: 4px;
    border: 1px solid gray; 
  } 
`
const Swatch = styled.div`
  display: inline-block;
  border: 1px solid gray;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${props => props.color}
`