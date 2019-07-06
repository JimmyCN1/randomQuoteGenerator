import React from "react";

import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";
import Controls from "./controls/Controls.js";

import AppTheme from "../AppTheme.js";
import quotes from "../QuotesJSON.js";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    const nextIndex = Math.floor(Math.random() * quotes.length);
    this.state = {
      quote: quotes[nextIndex].quote,
      author: quotes[nextIndex].author
    };
  }

  fetchNextQuote = () => {
    const nextIndex = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[nextIndex].quote,
      author: quotes[nextIndex].author
    });
  };

  static contextType = AppTheme;

  render() {
    let styles = {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "white",

      borderRadius: "2%",
      padding: "35px",
      margin: "20px",
      maxWidth: "600px"
    };

    styles.color = this.context.theme;

    let { quote, author } = this.state;
    const { fetchNextQuote } = this;

    return (
      <div style={styles}>
        <QuoteText quote={quote} />
        <QuoteAuthor author={author} />
        <Controls quote={quote} fetchNextQuote={fetchNextQuote} />
      </div>
    );
  }
}

export default Quote;
