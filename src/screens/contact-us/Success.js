import React, { Component } from "react";
import "./Success.css";
import success from "../../assets/svgs/success.svg";
// import { Link } from 'react-router-dom'

export class Success extends Component {
  render() {
    return (
      <div id="success">
        <div className="container">
          <h1>
            <img src={success} alt="" />
          </h1>
          <h2>Your request has been received</h2>
          <p>
            One of customer service agents will get back to you as soon as
            possible. You can always to our FAQ & Help section here for instant
            help.{" "}
          </p>
          {/* <div className="go_button_container" style={{ display: "flex" }}>
            <button onClick={this.props.display.bind()}>Thanks</button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Success;
