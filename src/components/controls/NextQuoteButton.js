import React from "react";

class NextQuoteButton extends React.Component {
  handleClick = () => {
    this.props.fetchNextQuote();
  };

  render() {
    const { fetchNextQuote } = this.props;
    return (
      <input
        style={styles}
        type="button"
        name="nextQuote"
        value="Next Quote"
        onClick={fetchNextQuote}
      />
    );
  }
}

const styles = {
  borderRadius: "4px"
};

export default NextQuoteButton;
