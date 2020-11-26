import React from "react";
import "./ENavbar.css";
import { Link } from "react-router-dom";
import previewImg from "../../assets/svgs/Editing-Navbar-Img-Svg/Eye preview icon.svg";
import downloadImg from "../../assets/svgs/Editing-Navbar-Img-Svg/Download icon.svg";
import Daniel from "../../assets/images/Editing-Navbar-Img/Daniel.png";
import navburger from "../../assets/svgs/Editing-Navbar-Img-Svg/Enav-burger.svg";

function ENavbar() {
  return (
    <nav
      id="e-nav"
      className="navbar navbar-css navbar-expand-lg navbar-light bg-primary sticky-top"
    >
      <div className="container">
        <Link className="navbar-burger-mobile" to="/">
          <img src={navburger} alt="navburger icon" />
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
        <Link className="navbar-brandname-container" to="/">
          <a className="navbar-brand text-white logo">ResumeBuilder</a>
        </Link>
        <Link to="#" className="text-light profile-nav-mobile">
          <img src={Daniel} alt="" />
        </Link>
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
