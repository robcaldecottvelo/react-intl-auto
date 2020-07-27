import React from "react";
import { FormattedMessage } from "react-intl";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <FormattedMessage
            defaultMessage="Edit <code>src/App.js</code> and save to reload."
            values={{ code: (chunks) => <code>{chunks}</code> }}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FormattedMessage defaultMessage="Learn React" />
        </a>
      </header>
    </div>
  );
}

export default App;
