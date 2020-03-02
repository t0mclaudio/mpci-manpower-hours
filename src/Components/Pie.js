import React from 'react';
import { Pie } from 'react-chartjs-2';
import styled from 'styled-components';

export default ({results}) => {
  const values = [results.hours.DG, results.hours.PHG, results.hours.PRG, results.hours.BG];
  initial.datasets[0].data = values;
  return (
    <Wrapper>
      <Pie 
        data={initial} 
        width={500}
        height={500}
        options={{ maintainAspectRatio: false }} />
    </Wrapper>
  )
};

const initial = {
	labels: ['Design Group', 'Photography Group', 'Production Group', 'Binding Group'],
	datasets: [{
		data: [300, 50, 100, 10],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const Wrapper = styled.div``