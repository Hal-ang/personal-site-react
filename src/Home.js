import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import About from "./About";

const Home = () => {
  return (
    <div>
      <div id="home-introduce">
        <p>안녕하세요</p>
        <p>풀스택 개발자를 꿈꾸는 예비 개발자입니다</p>
      </div>
      <div className="next-page-btn">
        <Link to="/about">
          <img src="/images/next-arrow.png"></img>
        </Link>
      </div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
};

export default Home;
