import styled from 'styled-components';
import { Layout, Menu as _Menu } from 'antd';

export const Header = styled(Layout.Header)`
  background: #fff;
  display: flex;
  justify-content: space-between;
  height: 48px;
  line-height: 48px;
  padding: 0;
`;

export const Logo = styled.div`
  font-size: 1.5em;
  font-weight: 600;
  padding: 0 16px;
  &:first-letter {
  }
`;

export const Menu = styled(_Menu)`
  line-height: 48px;
  border-bottom: none;

  .ant-menu-item {
    border-bottom: none;
    top: 0;
    margin-top: 0;
  }

  .ant-menu-item:hover,
  .ant-menu-item-selected {
    border-bottom: none;
    color: #333;
    text-decoration: underline;
  }
`;

export const MenuItem = styled(_Menu.Item)`
  font-weight: 500;
  text-transform: uppercase;
  &:first-letter {
  }
`;
