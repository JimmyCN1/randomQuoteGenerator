import React from "react";

import AppTheme from "../../AppTheme.js";

class Social extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppTheme;

  render() {
    const styles = {
      padding: "0px 3px",
      margin: "0 !important",
      alignSelf: "flex-end",
      textDecoration: "none"
    };

    styles.color = this.context.theme;

    return (
      <div>
        <a
          style={styles}
          href={`https://twitter.com/intent/tweet?text=${this.props.quote}`}
        >
          <i className="fab fa-twitter-square fa-3x" />
        </a>

        <a style={styles} href="#">
          <i className="fab fa-tumblr-square fa-3x" />
        </a>
        <a style={styles} href="#">
          <i className="fab fa-facebook-square fa-3x" />
        </a>
      </div>
    );
  }
}

export default Social;
