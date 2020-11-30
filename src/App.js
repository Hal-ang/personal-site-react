import React, { Component } from "react";
import Menu from "./Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Footer from "./Footer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  // handleClickMenu() {
  //   // 메뉴 버튼 누르면 숨겨놨던 메뉴 리스트가 노출된다
  // }

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
