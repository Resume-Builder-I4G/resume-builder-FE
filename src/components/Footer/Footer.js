import React from "react";
import "./Footer.css";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  text-align: left;
  color: #ffffff;
`;

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row footer-wrap">
          <div className="col-md-4">
            <StyledTitle>Resume builder</StyledTitle>
            <p className="moto">
              Design and build a unique CV that your dream job will notice.
            </p>
          </div>
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-3">
                <p>Quick links</p>
                <ul className="footer-list">
                  <li className="list-item">Home</li>
                  <li className="list-item">About</li>
                  <li className="list-item">Contact</li>
                </ul>
              </div>
              <div className="col-md-5">
                <p>Contact Us</p>
                <ul className="footer-list">
                  <li className="list-item">
                    Office Address: <br /> 24 Lekki Street Lagos, Nigeria
                  </li>
                  <li className="list-item">Call: 090 - 000 - 0000</li>
                  <li className="list-item">Email: hello@resumebuilder.com</li>
                </ul>
              </div>
              <div className="col-md-3">
                <p>Follow Us</p>
                <ul>
                  <li>Twitter</li>
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
