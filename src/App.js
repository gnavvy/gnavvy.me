import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  get style() {
    return {
      root: {}
    };
  }

  render() {
    return <div style={this.style.root}>gnavvy#gmail.com</div>;
  }
}
