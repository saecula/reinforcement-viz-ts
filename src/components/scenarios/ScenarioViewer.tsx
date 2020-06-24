import React, { useContext } from 'react';
import { Box } from 'rebass';
import SingleScenario from './SingleScenario';
import { ThemeType, AgentContext } from 'contexts';

const getCss = (
  theme: ThemeType,
  scenarioNum: number
): React.CSSProperties => ({
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: theme.surface,
  flexWrap: scenarioNum === 2 ? 'nowrap' : 'wrap',
  marginTop: '10px',
  marginBottom: '10px',
  minHeight: '58vh',
});

const ScenarioViewer: React.FunctionComponent<{ theme: ThemeType }> = (
  props
) => {
  const { theme } = props;
  const { agents } = useContext(AgentContext);
  return (
    <div style={getCss(theme, agents.length)}>
      {agents.map((agent, idx) => (
        <Box key={idx} width={`${100 / agents.length}%`}>
          <SingleScenario />
        </Box>
      ))}
    </div>
  );
};

export default ScenarioViewer;
