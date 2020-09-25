import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background: #fbfbfb;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
`;

export const Canvas = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const SidePanel = styled.div`
  width: 0vw;
  padding: 24px;
  border: dashed 1px;
`;

export const Content = styled.div`
  width: 100vw;
`;
