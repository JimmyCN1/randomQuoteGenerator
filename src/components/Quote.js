import React from "react";

import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";
import Controls from "./controls/Controls.js";

import quotes from "../QuotesJSON.js";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    };
  }

  fetchNextQuote = () => {
    const nextIndex = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[nextIndex].quote,
      author: quotes[nextIndex].author
    });
  };

  render() {
    let { quote, author } = this.state;
    const { fetchNextQuote } = this;

    return (
      <div style={styles}>
        <QuoteText quote={quote} />
        <QuoteAuthor author={author} />
        <Controls fetchNextQuote={fetchNextQuote} />
      </div>
    );
  }
}

let styles = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "black",
  color: "lightgrey",
  borderRadius: "2%",
  padding: "35px",
  margin: "20px",
  maxWidth: "600px"
};

export default Quote;
