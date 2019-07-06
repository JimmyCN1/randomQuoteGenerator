import React from "react";
import "./App.css";

import AppTheme from "./AppTheme";
import Quote from "./components/Quote.js";

const getTheme = currentTheme => {
  let newTheme;
  do {
    newTheme = themes[Math.floor(Math.random() * themes.length)];
  } while (newTheme === currentTheme);

  return newTheme;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: getTheme()
    };
  }
  render() {
    let styles = {
      backgroundColor: this.state.theme
    };

    const providerValue = {
      theme: this.state.theme,
      setTheme: () => this.setState({ theme: getTheme(this.state.theme) })
    };

    return (
      <AppTheme.Provider value={providerValue}>
        <div className="App" style={styles}>
          <Quote />
        </div>
      </AppTheme.Provider>
    );
  }
}

const themes = [
  "rgba(238, 99, 82, 1)",
  "rgba(8, 178, 227, 1)",
  "rgba(247, 178, 103, 1)",
  "rgba(87, 167, 115, 1)",
  "rgba(72, 77, 109, 1)"
];

export default App;
