import React, { useContext } from 'react';
import { Box } from 'rebass';
import { ThemeContext } from 'contexts';

const StartButton = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Box
      css={{
        flexGrow: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        onClick={() => console.log('whee')}
        id="startbutton"
        style={{
          width: 0,
          height: 0,
          borderTop: '5vw solid transparent',
          borderBottom: '5vw solid transparent',
          borderLeft: `5vw solid ${theme.secondary}`,
          marginLeft: '28%',
        }}
      />
    </Box>
  );
};

export default StartButton;
