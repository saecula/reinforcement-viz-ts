import React from 'react';
import { Box } from 'rebass';
import { EnvironmentType } from '../../contexts';

const Grid: React.FunctionComponent<{ env: EnvironmentType }> = (props) => {
  const { env: environment } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {environment.states.map((row: any, idx: number) => (
        <GridRow
          key={idx}
          i={idx}
          row={row}
          numberOfRows={environment.states.length}
        />
      ))}
    </div>
  );
};

const GridRow: React.FunctionComponent<{
  i: number;
  row: string[];
  numberOfRows: number;
}> = (props) => {
  const { row, numberOfRows, i } = props;
  return (
    row && (
      <div
        style={{
          flexBasis: 'auto',
          display: 'flex',
          flexDirection: 'row',
          height: `${100 / numberOfRows}%`,
        }}
      >
        {row.map((blockType, idx) => (
          <GridBlock
            key={idx}
            i={i}
            j={idx / (row.length - 1)}
            blockType={blockType}
          />
        ))}
      </div>
    )
  );
};

const GridBlock: React.FunctionComponent<{
  blockType: string;
  i: number;
  j: number;
}> = (props) => {
  const { blockType, i, j } = props;
  return (
    <Box
      style={{
        backgroundColor: blockType === 'white' ? '#ffffff00' : blockType,
        borderLeft: '1px solid #878787',
        borderBottom: '1px solid #878787',
        borderTop: i === 0 ? '1px solid #878787' : 'none',
        borderRight: j === 1 ? '1px solid #878787' : 'none',
        padding: `${1.08}%`,
        maxWidth: '10%',
      }}
    ></Box>
  );
};

export default Grid;
