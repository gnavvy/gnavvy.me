import React from 'react';
import { Canvas, Content, GlobalStyle, Sider, NavItem } from './components';

export const Nav = () => {
  return (
    <>
      <NavItem>About</NavItem>
      <NavItem>Brain Dump</NavItem>
      <NavItem>Creating Docs</NavItem>
      <NavItem>FAQ</NavItem>
    </>
  );
};

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Canvas>
        <Sider>
          <Nav />
        </Sider>
        <Content>Content</Content>
      </Canvas>
    </>
  );
};
