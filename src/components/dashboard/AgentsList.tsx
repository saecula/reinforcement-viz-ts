import React, { useState, useContext } from 'react';
import { Box } from 'rebass';
import { CSSObject } from 'styled-components';
import AgentForm from './AgentForm';
import InfoPanel from './InfoPanel';
import AddPanel from './AddPanel';
import { ThemeType, AgentType, AgentContext } from 'contexts';

const css: CSSObject = {
  width: '33vw',
  textAlign: 'center',
  alignItems: 'stretch',
  flexGrow: 2,
};

const AgentsList: React.FunctionComponent<{ theme: ThemeType }> = (props) => {
  const { theme } = props;
  const { agents, removeAgent, editingAgent, setEditingAgent } = useContext(
    AgentContext
  );

  const [formView, toggleFormView] = useState({ on: false, edit: false });
  const openToEdit = (agent: AgentType): void => {
    setEditingAgent(agent);
    toggleFormView({ on: true, edit: true });
  };
  const openToAdd = (): void => toggleFormView({ on: true, edit: false });
  const closeForm = (): void =>
    toggleFormView((prev) => ({ ...prev, on: false }));

  return (
    <Box css={css}>
      {formView.on && (
        <AgentForm
          theme={theme}
          agent={editingAgent}
          isEdit={formView.edit}
          closeForm={closeForm}
        />
      )}
      {agents.map((agent, idx) => (
        <PanelWrapper key={idx}>
          <InfoPanel
            theme={theme}
            agent={agent}
            edit={openToEdit}
            remove={removeAgent}
          />
        </PanelWrapper>
      ))}
      {agents.length < 4 && (
        <PanelWrapper>
          <AddPanel theme={theme} onClick={openToAdd} />
        </PanelWrapper>
      )}
    </Box>
  );
};

const PanelWrapper: React.FunctionComponent<{
  key?: number;
}> = ({ children }) => {
  return <Box css={{ display: 'flex', height: '25%' }}>{children}</Box>;
};

export default AgentsList;
