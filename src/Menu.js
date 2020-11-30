import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.resetClickMenu = this.resetClickMenu.bind(this);
  }

  handleClickMenu(event) {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        showMenu: !prevState.showMenu,
      };
    });
  }

  resetClickMenu() {
    this.setState({ showMenu: false });
  }

  render() {
    return (
      <>
        <div id="menu-container">
          <button id="menu-btn" onClick={this.handleClickMenu}>
            MENU
          </button>
          {this.state.showMenu ? (
            <ul id="menu-lists" onClick={this.resetClickMenu}>
              <li className="menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/about">About</Link>
              </li>
              <li className="menu-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          ) : null}
        </div>
        <div id="switch-container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </>
    );
  }
}

export default Menu;
