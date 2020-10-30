import React, { useState, useEffect } from "react";
import "./Success.css";
import success from "../../assets/svgs/success.svg";
import close_button from "../../assets/svgs/close.svg";
import { Link } from "react-router-dom";

function Success(props) {
  return (
    <div id="success">
      <div className="container">
        <Link to="/contact">
          <img
            src={close_button}
            alt="close-button"
            className="close_button"
            onClick={props.close}
          />
        </Link>
        <img src={success} alt="" />
        <h2>Your request has been received</h2>
        <p>
          One of customer service agents will get back to you as soon as
          possible. You can always to our FAQ & Help section here for instant
          help.{" "}
        </p>
      </div>
    </div>
  );
}

export default Success;
