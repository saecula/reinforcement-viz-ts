import React from 'react';
import './App.css';
import StandardPage from 'components/StandardPage';
import { TProvider } from 'providers';
import Content from 'components/Content';

function App() {
  return (
    <TProvider>
      <StandardPage>
        <Content />
      </StandardPage>
    </TProvider>
  );
}

export default App;
