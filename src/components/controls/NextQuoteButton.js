import React from "react";

import AppTheme from "../../AppTheme.js";

class NextQuoteButton extends React.Component {
  handleClick = () => {
    this.context.setTheme();
    this.props.fetchNextQuote();
  };

  static contextType = AppTheme;

  render() {
    let styles = {
      borderRadius: "4px",
      fontSize: "120%",
      fontWeight: "bold",
      borderStyle: "none",
      color: "white"
    };

    styles.backgroundColor = this.context.theme;

    return (
      <input
        style={styles}
        type="button"
        name="nextQuote"
        value="Next Quote"
        onClick={this.handleClick}
      />
    );
  }
}

export default NextQuoteButton;
