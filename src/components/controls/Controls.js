import React from "react";
import Social from "./Social.js";
import NextQuoteButton from "./NextQuoteButton.js";

class Controls extends React.Component {
  constructor(props) {
    super(props);
  }
  // debugger;
  render() {
    return (
      <div style={styles}>
        <Social />
        <NextQuoteButton fetchNextQuote={this.props.fetchNextQuote} />
      </div>
    );
  }
}

const styles = {
  display: "flex",
  justifyContent: "space-between"
};

export default Controls;
