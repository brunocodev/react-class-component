import React from "react";

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange(event) {
    this.props.onUpdate(event);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default Input;
