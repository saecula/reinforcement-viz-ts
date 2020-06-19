import React from 'react';
import SingleScenario from './SingleScenario';
import { ThemeType } from 'contexts';

const getCss = (theme: ThemeType): React.CSSProperties => ({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  backgroundColor: theme.surface,
  marginTop: '10px',
  marginBottom: '10px',
  alignItems: 'stretch',
  justifyContent: 'space-around',
});

const ScenarioBox: React.FunctionComponent<{ theme: ThemeType }> = (props) => {
  const { theme } = props;
  return (
    <div style={getCss(theme)}>
      <SingleScenario />
      <SingleScenario />
      <SingleScenario />
      <SingleScenario />
    </div>
  );
};

export default ScenarioBox;
