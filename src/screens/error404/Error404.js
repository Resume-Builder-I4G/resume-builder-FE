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
  justify-content: center;
`;

const StyledButton = styled.a`
  text-decoration: none !important;
  outline: none;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
  background: #216de0;
  border-radius: 6px;
  padding: 20px 70px;
  color: #ffffff;

  &:hover {
    background-color: #fff !important;
    color: #216de0 !important;
    border: 1px solid#216DE0;
    text-decoration: none !important;
    text-decoration-line: none !important;
  }
`;

function Error404() {
  return (
    <div id="error404" className="text-center">
      <div className="container">
        <StyledImg
          src={error_message}
          alt="Error image"
          className="img-fluid"
        />
        <StyleTitle>Oooops!!!</StyleTitle>
        <p className="text-center mb-4">
          We can’t seem to find the page you’re looking for
        </p>
        <StyledDiv className="button_container text-center">
          <Link to="/">
            <a
              type="button"
              className="btn btn-primary text-center text-white"
              href="#"
            >
              Go Home
            </a>
          </Link>
        </StyledDiv>
      </div>
    </div>
  );
}

export default Error404;
