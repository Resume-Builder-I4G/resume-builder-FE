import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import error_message from "../../assets/svgs/404-Error-pana.svg";

const StyledImg = styled.img`
  margin-bottom: 60px;
  width: 565px;
  height: 380px;
`;

const StyleTitle = styled.h2`
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
`;

const StyledDiv = styled.div`
  marging-top: 50px;
`;

const StyledButton = styled.a`
  outline: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  background: #216de0;
  border-radius: 6px;
  padding: 20px 70px;
  color: #ffffff;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`;

function Error404() {
  return (
    <div id="error404" className="text-center">
      <div className="container">
        <StyledImg src={error_message} alt="" />
        <StyleTitle>Oooops!!!</StyleTitle>
        <p className="text-center mb-4">
          We can’t seem to find the page you’re looking for
        </p>
        <StyledDiv className="button_container">
          <Link to="/contact">
            {" "}
            <StyledButton>Go Home</StyledButton>
          </Link>
        </StyledDiv>
      </div>
    </div>
  );
}

export default Error404;
