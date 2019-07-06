import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Quote from "./components/Quote.js";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Quote />
      </div>
    );
  }
}

export default App;
