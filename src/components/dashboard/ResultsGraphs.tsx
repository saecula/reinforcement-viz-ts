import React from 'react';
import { Box } from 'rebass';
import { Line } from 'react-chartjs-2';
import { CSSObject } from 'styled-components';

const css: CSSObject = {
  flexGrow: 15,
  maxWidth: '52%',
  paddingLeft: '5px',
};
const ResultsGraphs: React.FunctionComponent = () => {
  const state = {
    labels: Array(40)
      .fill(0)
      .map((_, idx) => idx + 1),
    datasets: [
      {
        label: 'Rewards trend',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [1, 1, 1, 3, 4, 2, 400, 5, 1],
      },
    ],
  };
  return (
    <Box css={css}>
      <Line
        width={1}
        height={0.5}
        data={state}
        options={{
          title: {
            display: false,
            text: 'rewards trend',
            fontSize: 20,
          },
          legend: {
            display: false,
          },
        }}
      />
    </Box>
  );
};

export default ResultsGraphs;
