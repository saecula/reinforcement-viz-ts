import React from 'react';
import './App.css';
import StandardPage from 'components/StandardPage';
import {
  ThemeProvider,
  // EnvironmentProvider,
  // AgentProvider,
  // ScenarioProvider,
} from 'contexts';
import Content from 'components/Content';

function App() {
  return (
    <ThemeProvider>
      {/* // EnvironmentProvider // AgentProvider //ScenarioProvider */}
      <StandardPage>
        <Content />
      </StandardPage>
    </ThemeProvider>
  );
}

export default App;
