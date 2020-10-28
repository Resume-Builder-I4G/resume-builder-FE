import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
          <img className="img-fluid" src="./assets/images/navicon.png" alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link" href="">
                  About
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link" href="">
                  Contact
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
                  Get Started
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
