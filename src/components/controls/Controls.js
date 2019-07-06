import React from "react";
import Social from "./Social.js";
import NextQuoteButton from "./NextQuoteButton.js";

function Controls(props) {
  return (
    <div style={styles}>
      <Social />
      <NextQuoteButton />
    </div>
  );
}

const styles = {
  display: "flex",
  justifyContent: "space-between"
};

export default Controls;
