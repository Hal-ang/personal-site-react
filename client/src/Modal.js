import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div id="modal-background">
          <div id="modal-area">
            <div id="picture-area">
              <img
                id="first-picture"
                src="/images/first-picture.JPG"
                alt="first-picture"
              ></img>
              <img
                id="second-picture"
                src="/images/second-picture.JPG"
                alt="second-picture"
              ></img>
              <div id="modal-close-btn-div">
                <button
                  id="modal-close-btn"
                  onClick={this.props.handleClickEmoji}
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
