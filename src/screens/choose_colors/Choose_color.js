import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Choose_color.module.css";
import ColorData from "./colorsObj";

const StyledColor = styled.div`
  width: 85px;
  height: 50px;
  border-radius: 6px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const StyleTitle = styled.h1`
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px;
`;

function Choose_color() {
  return (
    <div>
      <nav
        style={{ backgroundColor: "#F9F9FB !important;" }}
        className="navbar navbar-css navbar-expand-lg navbar-light bg-white sticky-top"
      >
        <div className="container">
          <Link to="/">
            <a className="navbar-brand logo">
              Resume<span className="sub-logo">Builder</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <img
              className="img-fluid"
              src="./assets/images/navicon.png"
              alt=""
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto"></ul>
          </div>
        </div>
      </nav>
      <div className="text-center">
        <StyleTitle>What do you want your CV to look like?</StyleTitle>
        <p className="text-center">
          Choose color and scroll to see awesome templates. Click to select a
          specific template
        </p>
      </div>
      <div className="container">
        <div style={{ padding: "0px 10px" }} className="colors-container row">
          {ColorData.map((color) => {
            return (
              <StyledColor style={{ backgroundColor: color }} className="col">
                .
              </StyledColor>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Choose_color;
