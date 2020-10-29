import React from "react";
import "./ENavbar.css";
import { Link } from "react-router-dom";
import previewImg from "../../assets/svgs/Eye preview icon.svg";
import downloadImg from "../../assets/svgs/Download icon.svg";
import Daniel from "../../assets/images/Daniel.png";

function ENavbar() {
  return (
    <nav className="navbar navbar-css navbar-expand-lg navbar-light bg-primary sticky-top">
      <div className="container">
        <Link to="/">
          <a className="navbar-brand text-light logo">
            Resume <span className="sub-logo text-light">Builder</span>
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
                <a className="nav-link text-light" href="#">
                  <img src={previewImg} alt="" /> Preview Resume{" "}
                  <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about">
                <a className="nav-link text-light" href="">
                  <img src={downloadImg} alt="" /> Download
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link text-light" href="">
                  <img src={Daniel} alt="" />
                  Awojide Daniel
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ENavbar;
