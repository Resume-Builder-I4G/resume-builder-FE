import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import error_message from "../../assets/svgs/404-Error-pana.svg";

const StyledImg = styled.img`
  margin-bottom: 60px;
  width: 565px;
  height: 380px;
`;

const StyleTitle = styled.h1`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledButton = styled.button`
  outline: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;
  background: #216de0;
  border-radius: 6px;
`;

function Error404() {
  return (
    <div id="error404" className="text-center">
      <div className="container">
        <StyledImg src={error_message} alt="" />
        <h2>Oooops!!!</h2>
        <p className="text-center">
          We can’t seem to find the page you’re looking for
        </p>
        <div className="button_container">
          {/* <Link to="/">
            {" "}
            <button>Go Home</button>
          </Link> */}
          {/* <StyledButton>Go Home</StyledButton> */}
        </div>
      </div>
    </div>
  );
}

export default Error404;
