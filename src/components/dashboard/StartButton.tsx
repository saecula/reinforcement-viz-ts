import React, { useContext } from 'react';
import { Box } from 'rebass';
import { ThemeContext } from 'contexts';

const StartButton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box css={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
      <div
        onClick={() => {}}
        style={{
          width: 0,
          height: 0,
          borderTop: '3em solid transparent',
          borderBottom: '3em solid transparent',

          borderLeft: `3em solid ${theme.secondary}`,
          marginLeft: '28%',
        }}
      />
    </Box>
  );
};

export default StartButton;
