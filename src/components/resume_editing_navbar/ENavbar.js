import React from "react";
import { getUser } from "../../utils/Common";
import { Link } from "react-router-dom";

import previewImg from "../../assets/svgs/Editing-Navbar-Img-Svg/Eye preview icon.svg";
import downloadImg from "../../assets/svgs/Editing-Navbar-Img-Svg/Download icon.svg";
import navburger from "../../assets/svgs/Editing-Navbar-Img-Svg/Enav-burger.svg";
import "./ENavbar.css";

function ENavbar() {
  const hero = "https://via.placeholder.com/45";
  const user = getUser();
  return (
    <nav
      id="e-nav"
      className="navbar navbar-css navbar-expand-lg navbar-light bg-primary sticky-top"
    >
      <div className="container">
        <button
          className="navbar-burger-mobile navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent2"
          aria-controls="navbarSupportedContent2"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <img src={navburger} alt="navburger icon" />
        </button>
        <Link
          className="navbar-brandname-container navbar-brand text-white logo"
          to="/dashboard"
        >
          ResumeBuilder
        </Link>
        <Link to="#" className="text-light profile-nav-mobile">
          <img src={user.image ? user.image : hero} alt="" />
        </Link>
        <div
          className="collapse navbar-collapse navbar-nav-mobile"
          id="navbarSupportedContent2"
        >
          <ul>
            <li>Personal Info</li>
            <li>Education</li>
            <li>Experience</li>
          </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                <img src={previewImg} alt="" /> Preview Resume{" "}
                <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/dashboard">
                <img src={downloadImg} alt="" /> Download
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/dashboard">
                <img src={user.image ? user.image : hero} alt="" />
                {user.name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ENavbar;
