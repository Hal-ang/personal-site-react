import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Arrow from "./Arrow";
import Modal from "./Modal";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextPage: "/contact",
      prevPage: "/",
      checked: false,
    };
    this.handleClickEmoji = this.handleClickEmoji.bind(this);
  }

  handleClickEmoji() {
    this.setState((prevState) => {
      return {
        checked: !prevState.checked,
      };
    });
  }

  render() {
    return (
      <>
        {this.state.checked ? (
          <Modal handleClickEmoji={this.handleClickEmoji} />
        ) : null}
        <div className="main-area">
          <div id="about-container">
            <img
              onClick={this.handleClickEmoji}
              id="about-emoji"
              src="/images/about-emoji.jpg"
              alt="about-emoji"
            ></img>

            <div id="detail-introduce">
              <p>안녕하세요 제 이름은 정하랑입니다!</p>
              <p>그래서 저는 웅앵웅 이러쿵 저러쿵</p>
              <p>
                코딩의 즐거움을 느껴, 앞으로는 더 즐기며 코딩할 수 있을 것
                같습니다!
              </p>
              <p>이모지를 누르면 제 사진을 볼 수 있습니다!</p>
            </div>
          </div>
          <Arrow
            nextPage={this.state.nextPage}
            prevPage={this.state.prevPage}
          />
        </div>
      </>
    );
  }
}

export default About;
