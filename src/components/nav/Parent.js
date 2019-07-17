import React, {Component} from 'react';
import { HotdogButton, Navigation } from './';

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      buttonClicked: false,
      items: [
        'Home',
        'About',
        'Services',
        'Support',
        'Contact'
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    });
  }

  render() {
    if (this.state.buttonClicked) {
      return (
        <Navigation click={this.handleClick} items={this.state.items}/>
      );
    }
    return (
      <HotdogButton click={this.handleClick}/>
    );
  }
}

export { Parent };
