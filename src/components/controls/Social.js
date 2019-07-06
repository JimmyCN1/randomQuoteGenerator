import React from "react";

function Social(props) {
  return (
    <div>
      <a
        // class="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${props.quote}`}
      >
        <i className="fab fa-twitter-square fa-3x" style={styles} />
      </a>

      <i className="fab fa-tumblr-square fa-3x" style={styles} />
      <i className="fab fa-facebook-square fa-3x" style={styles} />
    </div>
  );
}

const styles = {
  padding: "0px 3px",
  margin: "0 !important",
  alignSelf: "flex-end"
};

export default Social;
