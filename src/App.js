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

  change(event) {
    this.setState({ ...this.setState, value: event.target.value });
  }

  render() {
    const { text, value } = this.state;
    const { message } = this.props;
    const newTextState = "Hola mundo desde el Estado!";

    return (
      <div>
        <h1>{message}</h1>

        <h2>{text}</h2>

        <h3>{value}</h3>

        <StatelessCompoent textColor="green" />

        <StatelessInput onUpdate={this.change.bind(this)} />

        <Input onUpdate={this.change.bind(this)} />

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

const StatelessInput = ({ type = "text", ...props }) => (
  <input type={type} onChange={props.onUpdate} />
);

App.propTypes = {
  message: PropTypes.string.isRequired
};

App.defaultProps = {
  message: "Hola mundo!"
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
