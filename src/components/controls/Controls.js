import React from "react";
import Social from "./Social.js";
import NextQuoteButton from "./NextQuoteButton.js";

class Controls extends React.Component {
  render() {
    const styles = {
      display: "flex",
      justifyContent: "space-between"
    };

    const { quote, fetchNextQuote } = this.props;

    return (
      <div style={styles}>
        <Social quote={quote} />
        <NextQuoteButton fetchNextQuote={fetchNextQuote} />
      </div>
    );
  }
}

export default Controls;
