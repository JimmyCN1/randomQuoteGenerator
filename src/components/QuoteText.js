import React from "react";

function QuoteText(props) {
  return (
    <p style={styles}>
      <strong>"{props.quote}"</strong>
    </p>
  );
}

const styles = {
  fontSize: "150%"
  // color: this.context.theme
};

export default QuoteText;
