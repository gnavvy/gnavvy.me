import styled from 'styled-components';
import { Layout, Menu as _Menu } from 'antd';

export const Header = styled(Layout.Header)`
  background: #fff;
  padding: 0;
  height: 48px;
  line-height: 48px;
`;

export const Menu = styled(_Menu)`
  float: right;
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
