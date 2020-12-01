import React, { Component } from "react";
import About from "./About";
import Arrow from "./Arrow";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: "/about",
    };
  }

  render() {
    return (
      <div className="main-area">
        <div id="home-introduce">
          <p>안녕하세요</p>
          <p>풀스택 개발자를 꿈꾸는 예비 개발자입니다.</p>
        </div>
        <div className="next-page-btn">
          <Arrow nextPage={this.state.nextPage} />
        </div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default Home;
