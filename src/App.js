import React, { PureComponent } from 'react';

import { Canvas } from './components/container';
import { Header, Menu, MenuItem } from './components/header';
import { Content, Carousel } from './components/content';

export default class App extends PureComponent {
  state = {
    selectedMenuItem: 'project'
  };

  render() {
    const { selectedMenuItem } = this.state;
    return (
      <Canvas>
        <Header>
          <Menu mode="horizontal" defaultSelectedKeys={[selectedMenuItem]}>
            <MenuItem key="project">Project</MenuItem>
            <MenuItem key="publication">Publication</MenuItem>
            <MenuItem key="about">About</MenuItem>
          </Menu>
        </Header>
        <Content>
          <Carousel vertical autoplay>
            <div style={{ width: 240, height: 360, background: 'red' }}>
              <h3>1</h3>
            </div>
            <div style={{ background: 'yellow' }}>
              <h3>2</h3>
            </div>
            <div style={{ background: 'green' }}>
              <h3>3</h3>
            </div>
            <div style={{ background: 'blue' }}>
              <h3>4</h3>
            </div>
          </Carousel>
        </Content>
      </Canvas>
    );
  }
}
