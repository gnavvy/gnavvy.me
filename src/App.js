import React from 'react';
import { Canvas, Content, GlobalStyle, SidePanel } from './components';

import { KnowledgeMap } from './components/knowledge-map';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Canvas>
        <SidePanel />
        <Content>
          <KnowledgeMap />
        </Content>
      </Canvas>
    </>
  );
};
