import React, { Component } from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div id="default-background">
          <Menu />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
