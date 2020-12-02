import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import illustration from "../../assets/svgs/Mobile login-pana.svg";
import googleImg from "../../assets/svgs/signup-svg/Google.svg";
import fbImg from "../../assets/svgs/signup-svg/Facebook.svg";
import linkedinImg from "../../assets/svgs/signup-svg/LinkedIn.svg";
import { setUserSession } from "../../utils/Common";

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  color: #2e2e2e;

  @media (max-width: 500px) {
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

const StyledInput = styled.input`
  outline: none;
  background: #ffffff;
  border: 2px solid #216de0;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 10px;
  padding: 1em;
  width: 100%;
  height: 100%;
`;

const Styledlabel = styled.label`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0;
`;

const StyledButton = styled.a`
  background-color: #216de0 !important;
  border: none;
  width: 200px;
  height: 40px;

  &:hover {
    background-color: #f2f6fb !important;
    color: #216de0 !important;
    border: 1px solid#216DE0;
    text-decoration: none !important;
    text-decoration-line: none !important;
  }

  @media (max-width: 500px) {
    font-size: 10px;
    font-weight: 500;
    line-height: 12px;
    padding: 14px 40px;
    width: auto;
    border-radius: 6px;
  }
`;

function Signup(props) {
  const [isError, setIsError] = useState(false);
  const [loader, setLoader] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(props.history);

  // handle button click of login form
  const handleSignUp = (event) => {
    event.preventDefault();
    setIsError(false);
    setLoader(true);

    axios
      .post("https://resume-builder-i4g.herokuapp.com/auth/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          console.log(response);
          setLoader(false);
          setUserSession(response.data.token, response.data.user);
          props.history.push("/dashboard");
        } else {
          setIsError(true);
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoader(false);
      });
  };

  return (
    <div id="sign-up">
      <div className="row signup-body">
        <div className="col-md-7 left-signup">
          <div className="logo">
            <Link to="/">
              Resume<span className="sub-logo">Builder</span>
            </Link>
          </div>
          <div className="signup-content">
            <Title>Create Account</Title>
            <p className="signup__text">Register your account!</p>
            <form className="form" onSubmit={handleSignUp}>
              <div className="form-group">
                <Styledlabel htmlFor="contact-name">
                  <span>Full Name</span>
                  <StyledInput
                    className="form-control"
                    id="contact-name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Styledlabel>
              </div>

              <div className="form-group">
                <Styledlabel htmlFor="signup-email">
                  <span>Email</span>
                  <StyledInput
                    required
                    className="form-control"
                    id="signup-email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Styledlabel>
              </div>

              <div className="form-group">
                <Styledlabel htmlFor="signup-password">
                  <span>Password</span>
                  <StyledInput
                    required
                    className="form-control"
                    id="signup-password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Styledlabel>
              </div>

              <div className="text-left sign-up-btn-container">
                <button
                  type="submit"
                  className="btn btn-primary sign-up-btn"
                  style={{ background: loader ? "#ccc" : null }}
                  onClick={handleSignUp}
                >
                  {" "}
                  {!loader ? "Sign Up" : <FontAwesomeIcon icon={faEllipsisH} />}
                </button>
              </div>
              {isError && <div>The username or password provided</div>}
            </form>
            <div className="bottom-signup d-flex">
              <p>Create account with </p>
              <div className="other-signup">
                <a href="">
                  <img src={googleImg} alt="" />
                </a>
                <a href="">
                  <img src={fbImg} alt="" />
                </a>
                <a href="">
                  <img src={linkedinImg} alt="" />
                </a>
              </div>
            </div>
            <div className="new-account-now-mobile d-flex">
              <span>Already have an account?</span>
              <Link to="/sign-in">
                <StyledButton href="#" className="btn btn-primary">
                  Log in
                </StyledButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="right-div col-md-5">
          <div className="right-nav col-md-5">
            <ul className="menu-items d-flex">
              <li className="already__haveaccount">Already have an account?</li>
              <Link to="/sign-in">
                <li>
                  <StyledButton href="#" className="btn btn-primary">
                    Log in
                  </StyledButton>
                </li>
              </Link>
            </ul>
          </div>
          <img
            src={illustration}
            alt="right illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
