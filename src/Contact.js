import React, { Component } from "react";

class Contact extends Component {
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
          요청하기를 누르면 이메일로 이력서가 전송되어 확인 가능합니다!
        </div>
      </div>
    );
  }
}

export default Contact;
