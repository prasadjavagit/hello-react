import { Component } from 'react';

class ContentToggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };

    this.handleClick = () => {
      this.setState({ isOpen: !this.state.isOpen });
      if (this.props.onToggle) {
        this.props.onToggle();
      }
    };
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.props.summary}</button>
        {this.state.isOpen && <div>{this.props.children}</div>}
      </div>
    );
  }
}
export default ContentToggle;
