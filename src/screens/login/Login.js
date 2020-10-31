import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import loginIlustration from "../../assets/svgs/login-svg/Login-pana 1.svg";
import googleImg from "../../assets/svgs/signup-svg/Google.svg";
import fbImg from "../../assets/svgs/signup-svg/Facebook.svg";
import linkedinImg from "../../assets/svgs/signup-svg/LinkedIn.svg";
import Button from "../../components/Button";

const Title = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
  color: #2e2e2e;
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
  border-radius: 15px;
`;

const StyledCheckbox = styled.input`
  background: #fafafa;
  border: 1.5px solid #216de0;
  box-sizing: border-box;
  border-radius: 6px;
  margin-right: 10px;
`;

const StyledCheckboxLabel = styled.label``;

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setLoader(true);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200 || response.status === 201) {
          // form.reset();
          setStatus("SUCCESS");
          setLoader(false);
        } else {
          setStatus("ERROR");
          setLoader(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setStatus("ERROR");
        setLoader(false);
      });

    setLoader(true);
  };

  const updateStatus = () => {
    setStatus((status = ""));
  };

  return (
    <div>
      <div className="row signup-body">
        <div className="col-md-7 left-signup">
          <div className="logo">
            <Link to="/">
              <a className="" href="#">
                Resume<span className="sub-logo">Builder</span>
              </a>
            </Link>
          </div>
          <div className="signup-content">
            <Title>Welcome back!</Title>
            <p className="signup__text">Login to continue!</p>
            <form className="form" onSubmit={submitForm}>
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
              <div className="form-check">
                <StyledCheckbox
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <StyledCheckboxLabel
                  class="form-check-label"
                  for="exampleCheck1"
                >
                  Remember me
                </StyledCheckboxLabel>
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: loader ? "#ccc" : null }}
                >
                  {" "}
                  {!loader ? "Log in" : <i className="fas fa-ellipsis-h"></i>}
                </button>
              </div>
            </form>
            <div className="bottom-signup d-flex">
              <p>Log in with: </p>
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
          </div>
        </div>
        <div className="right-div col-md-5">
          <div className="right-nav col-md-5">
            <ul className="menu-items d-flex">
              <li className="already__haveaccount">Don’t have an account?</li>
              <Link to="/register">
                <li>
                  <Button href="#" className="btn btn-primary">
                    Sign up
                  </Button>
                </li>
              </Link>
            </ul>
          </div>
          <img
            src={loginIlustration}
            alt="Login illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
