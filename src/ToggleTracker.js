import { Component } from 'react';
import ContentToggle from './ContentToggle';

export class ToggleTracker extends Component {
  state = { numToggles: 0 };
  handleToggle() {
    console.log(this);
    this.setState({ numToggles: this.state.numToggles + 1 });
  }
  render() {
    return (
      <div>
        <p>Number of Toggles: {this.state.numToggles}</p>
        <ContentToggle summary="Tacos" onToggle={this.handleToggle.bind(this)}>
          <p>
            A taco is a traditioal Mexican dish composed of a corn or wheat
            tortilla folded or rolled around a filling.
          </p>
        </ContentToggle>
        <ContentToggle summary="Burritos" onToggle={this.handleToggle}>
          <p>Kind of like a taco, but not really. More value for your money.</p>
        </ContentToggle>
      </div>
    );
  }
}
