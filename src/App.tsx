import React from 'react';
import './App.css';
import StandardPage from 'components/StandardPage';
import {
  ThemeProvider,
  EnvironmentProvider,
  AgentProvider,
  // ScenarioProvider,
} from 'contexts';
import Content from 'components/Content';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <EnvironmentProvider>
          <AgentProvider>
            <StandardPage>
              <Content />
            </StandardPage>
          </AgentProvider>
        </EnvironmentProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
