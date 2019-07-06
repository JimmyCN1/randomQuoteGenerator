import React from "react";

function QuoteAuthor(props) {
  return <p style={styles}>{props.author}</p>;
}

const styles = {
  alignSelf: "flex-end"
};

export default QuoteAuthor;
