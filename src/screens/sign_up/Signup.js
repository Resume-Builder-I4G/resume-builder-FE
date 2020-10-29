import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Signup.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import illustration from "../../assets/svgs/Mobile login-pana.svg";

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
  margin-top: 16px;
  padding: 1em;
  width: 100%;
  height: 100%;
`;

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loader, setLoader] = useState(false);

  const submitForm = (event) => {
    event.preventDefault();
    setLoader(true);

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        name: name,
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
      <nav className="navbar navbar-css navbar-expand-lg navbar-light bg-white sticky-top">
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/login">
                  <a className="nav-link" href="">
                    Already have an account?
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a
                    type="button"
                    className="nav-link btn btn-primary text-white"
                    href="#"
                  >
                    Log in
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="d-flex justify-content-between">
        <div className="signup-content">
          <div className="container">
            <Title>Create Account</Title>
            <p className="signup__text">Register your account!</p>
            <form className="form" onSubmit={submitForm}>
              <div className="form-group">
                <label htmlFor="contact-name">
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
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="signup-email">
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
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="signup-password">
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
                </label>
              </div>

              <div className="text-left">
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ background: loader ? "#ccc" : null }}
                >
                  {" "}
                  {!loader ? "Sign Up" : <i className="fas fa-ellipsis-h"></i>}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="right">
          <img src={illustration} alt="right illustration" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
