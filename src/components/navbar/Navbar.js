import React from "react";
import styled from "styled-components";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import logo from "../../assets/svgs/Resume-Builder.svg";
const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 43px 100px;
`;
const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="logo">
        Resume builder
        {/* <img src={logo} alt="logo"> */}
      </div>
      <div className="nav-list">
        <Link to="/">
          <a href="#" id="blueNav">
            Home
          </a>
        </Link>
        <Link to="/about">
          <a href="#">About</a>
        </Link>
        <Link to="/contact">
          <a href="#">Contact</a>
        </Link>
        <Link to="/choose_color">
          <button>
            <p>Get Started</p>
          </button>
        </Link>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
