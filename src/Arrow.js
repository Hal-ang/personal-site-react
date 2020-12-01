import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Arrow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        {this.props.nextPage ? (
          <div className="next-page-btn">
            <Link to={this.props.nextPage}>
              <img src="/images/next-arrow.png"></img>
            </Link>
          </div>
        ) : null}
        {this.props.prevPage ? (
          <div className="prev-page-btn">
            <Link to={this.props.prevPage}>
              <img src="/images/prev-arrow.jpeg"></img>
            </Link>
          </div>
        ) : null}
      </>
    );
  }
}

export default Arrow;
