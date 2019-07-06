import React from "react";

function QuoteText(props) {
  return (
    <p style={styles}>
      <strong>{props.quote}</strong>
    </p>
  );
}

const styles = {
  fontSize: "120%"
};

export default QuoteText;
