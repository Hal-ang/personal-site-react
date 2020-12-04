import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Arrow from "./Arrow";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nextPage: "/",
      prevPage: "about",
    };
  }

  render() {
    return (
      <div id="contact-area">
        <div id="contact-title">CONTACT</div>
        <div id="writing-area">
          <input
            id="writing-email"
            type="email"
            placeholder="이메일을 입력하세요"
          ></input>
          <button id="submit-btn">요청하기</button>
        </div>
        <div id="detail-contact">
          요청하기를 누르면 이메일로 이력서가 전송되어 확인 가능합니다!<br></br>{" "}
          ps...아직 다른 게 전송될 수 있으니 당황하지 마세요.
        </div>
        <Arrow nextPage={this.state.nextPage} prevPage={this.state.prevPage} />
      </div>
    );
  }
}

export default Contact;
