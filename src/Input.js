import React from "react";

class Input extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  handleChange({ target }) {
    this.props.onUpdate(target.value);
    this.setState({ value: target.value });
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
