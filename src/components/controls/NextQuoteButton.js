import React from "react";

class NextQuoteButton extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.fetchNextQuote();
  };

  render() {
    const { fetchNextQuote } = this.props;
    return (
      <input
        type="button"
        name="nextQuote"
        value="Next Quote"
        onClick={fetchNextQuote}
      />
    );
  }
}

export default NextQuoteButton;
