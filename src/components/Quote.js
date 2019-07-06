import React from "react";

import QuoteText from "./QuoteText.js";
import QuoteAuthor from "./QuoteAuthor.js";
import Controls from "./controls/Controls.js";

function Quote(props) {
  return (
    <div style={styles}>
      <QuoteText />
      <QuoteAuthor />
      <Controls />
    </div>
  );
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
