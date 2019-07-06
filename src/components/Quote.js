import React from "react";

import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";
import Controls from "./controls/Controls.js";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    };
  }

  fetchNextQuote = () => {
    console.log(this.state);
    // debugger;
    const currentIndex = quotes
      .map(quote => {
        return quote.quote;
      })
      .indexOf(this.state.quote);
    console.log(currentIndex);
    const nextIndex = (currentIndex + 1) % 2;
    console.log(nextIndex);
    this.setState({
      quote: quotes[nextIndex].quote,
      author: quotes[nextIndex].author
    });
    // debugger;
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

const quotes = [
  {
    quote:
      "Too many of us are not living our dreams because we are living our fears.",
    author: "- Les Brown"
  },

  {
    quote:
      "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
    author: "- Marie Curie"
  }
];

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
