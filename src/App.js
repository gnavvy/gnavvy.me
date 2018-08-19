import React, { PureComponent } from 'react';

import { Layout } from 'antd';
import { Canvas } from './components/container';
import { Header, Logo, Menu, MenuItem } from './components/header';
import { Sider, SocialButton, VerticleMenu } from './components/sider';
import { Content, Carousel } from './components/content';

const PAGE = {
  ABOUT: 'ABOUT',
  PROJECT: 'PROJECT',
  PUBLICATION: 'PUBLICATION',
  SERVICE: 'SERVICE',
  CONTACT: 'CONTACT'
};

export default class App extends PureComponent {
  state = {
    selectedMenuItem: PAGE.ABOUT
  };

  render() {
    const { selectedMenuItem } = this.state;
    return (
      <Canvas>
        <Header>
          <Logo>Yang Wang</Logo>
          <Menu mode="horizontal" defaultSelectedKeys={[selectedMenuItem]}>
            <MenuItem key={PAGE.ABOUT}>About</MenuItem>
            <MenuItem key={PAGE.PROJECT}>Project</MenuItem>
            <MenuItem key={PAGE.PUBLICATION}>Publication</MenuItem>
            <MenuItem key={PAGE.SERVICE}>Service</MenuItem>
            <MenuItem key={PAGE.CONTACT}>Contact</MenuItem>
          </Menu>
        </Header>
        <Layout>
          <Sider id="sider">
            <SocialButton key="github">GH</SocialButton>
            <SocialButton key="twitter">TW</SocialButton>
            <SocialButton key="linkedin">IN</SocialButton>
          </Sider>
          <Content>
            <Carousel vertical autoplay>
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </Carousel>
          </Content>
        </Layout>
      </Canvas>
    );
  }
}
