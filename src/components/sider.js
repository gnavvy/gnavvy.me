import styled from 'styled-components';

export const Sider = styled.div`
  bottom: 12vh;
  display: flex;
  flex-direction: column-reverse;
  position: absolute;
`;

export const SocialButton = styled.button`
  border: none;
  color: #333;
  font-weight: 500;
  height: 48px;
  padding: 0 8px;
  transform: rotate(-90deg);

  &:hover {
    text-decoration: underline;
  }
`;
