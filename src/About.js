import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const About = () => {
  return (
    <>
      <div id="about-container">
        <img
          id="about-emoji"
          src="/images/about-emoji.jpg"
          alt="about-emoji"
        ></img>
        <div id="detail-introduce">
          <p>안녕하세요 제 이름은 정하랑입니다!</p>
          <p>그래서 저는 웅앵웅 이러쿵 저러쿵</p>
          <p>
            코딩의 즐거움을 느껴, 앞으로는 더 즐기며 코딩할 수 있을 것 같습니다!
          </p>
          <p>이모지를 누르면 제 사진을 볼 수 있습니다!</p>
        </div>
      </div>
      <div className="next-page-btn">
        <Link to="/contact">
          <img src="/images/next-arrow.png"></img>
        </Link>
      </div>
      <div className="prev-page-btn">
        <Link to="/home">
          <img src="/images/prev-arrow.jpeg"></img>
        </Link>
      </div>
    </>
  );
};

export default About;
