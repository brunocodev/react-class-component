import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "Hello world from State!",
      value: ""
    };
  }

  update(text) {
    this.setState({ text });
  }

  change(value) {
    this.setState({ ...this.setState, value: value });
  }

  render() {
    const text = this.props.text;
    const textState = this.state.text;
    const newTextState = "Hola mundo desde el Estado!";

    return (
      <div>
        <h1>{text}</h1>

        <h2>{textState}</h2>

        <h3>{this.state.value}</h3>

        <StatelessCompoent textColor="green" />

        <Input onUpdate={this.change} />

        <button type="button" onClick={this.update.bind(this, newTextState)}>
          Update the State
        </button>
      </div>
    );
  }
}

const StatelessCompoent = ({ textColor = "red" }) => {
  return <h4 style={{ color: textColor }}>Hello, i'm the StatelessCompoent</h4>;
};

// const Input = ({ type = "text", ...props }) => (
//   <input type={type} onChange={props.onUpdate} />
// );

App.propTypes = {
  text: PropTypes.string.isRequired
};

App.defaultProps = {
  text: "Hola mundo!"
};

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
