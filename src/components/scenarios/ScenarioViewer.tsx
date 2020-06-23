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
  minHeight: '60vh',
});

const ScenarioViewer: React.FunctionComponent<{ theme: ThemeType }> = (
  props
) => {
  const { theme } = props;
  const { agents } = useContext(AgentContext);
  const scenarioNum = 3; //temporary
  return (
    <div style={getCss(theme, scenarioNum)}>
      <Box width={`${100 / scenarioNum}%`}>
        <SingleScenario />
      </Box>
      <Box width={`${100 / scenarioNum}%`}>
        <SingleScenario />
      </Box>
      <Box width={`${100 / scenarioNum}%`}>
        <SingleScenario />
      </Box>

      {/* <SingleScenario /> */}
    </div>
  );
};

export default ScenarioViewer;
