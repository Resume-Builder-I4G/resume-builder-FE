import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import Daniel from "../../assets/images/Editing-Navbar-Img/Daniel.png";
import Grid from "../../assets/svgs/user_dashboard/grid.svg";
import List from "../../assets/svgs/user_dashboard/list.svg";
import Download from "../../assets/svgs/user_dashboard/download.svg";
import Share from "../../assets/svgs/user_dashboard/share.svg";
import More from "../../assets/svgs/user_dashboard/more-horizontal.svg";
import ResumeImage from "../../assets/images/user_dashboard/resume-image.png";
import styled from "styled-components";

const StyledWelcomeMsg = styled.h1`
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledInfo = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

function Dashboard() {
  const listOfResumes = [];
  return (
    <div>
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
            <img
              className="img-fluid"
              src="./assets/images/navicon.png"
              alt=""
            />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
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
      <div className="body">
        <div className="container">
          <div className="topbar d-flex justify-content-between">
            <div>
              <StyledWelcomeMsg>Glad to have you back, Daniel</StyledWelcomeMsg>
              <StyledInfo>
                One of your resume is still missing your personal details.
              </StyledInfo>
            </div>
            <div className="new-resume-btn text-center">
              <button href="#" className="btn btn-primary">
                New Resume
              </button>
            </div>
          </div>
          <div className="search-bar-container mt-4">
            <input type="text" />
          </div>
          <div className="resumes-container mt-4">
            <div className="bar d-flex justify-content-between">
              <span>Your resumes</span>
              <div className="resume-options d-flex">
                <select
                  id="resumeOption"
                  className="form-control"
                  value="Last Opened"
                >
                  <option value="Last Opened">Last Opened</option>
                  <option value="Last Edited">Last Edited</option>
                </select>
                <div className="layoutView d-flex">
                  <a href="#" className="">
                    <img src={Grid} alt="" />
                  </a>
                  <a href="#">
                    <img src={List} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid-view">
              {listOfResumes.map((resume) => {
                return (
                  <div>
                    <div className="resume-item">
                      <div className="resume-img">
                        <img src={ResumeImage} alt="" />
                      </div>
                      <div className="resume-info d-flex">
                        <div className="left-info">
                          <p className="bold">Resume_1</p>
                          <ul>
                            <li>
                              <span>Created on:</span> Apr 04, 2020
                            </li>
                            <li>
                              <span>Modified on:</span> Apr 04, 2020
                            </li>
                          </ul>
                        </div>
                        <div className="right-info">
                          <a href="#" className="mr-3">
                            <img src={Download} alt="" />
                          </a>
                          <a href="#">
                            <img src={Share} alt="" />
                          </a>
                          <a href="#">
                            <img src={More} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="list-view">
              <div className="row">
                <div className="resume-item col-md-3">
                  <div className="resume-img">
                    <img src={ResumeImage} className="img-fluid" alt="" />
                  </div>
                  <div className="resume-info d-flex justify-content-between">
                    <div className="left-info">
                      <p className="bold">Resume_1</p>
                      <ul>
                        <li>Created on: Apr 04, 2020</li>
                        <li>Modified on: Apr 04, 2020</li>
                      </ul>
                    </div>
                    <div className="right-info">
                      <a href="#">
                        <img src={Download} alt="" />
                      </a>
                      <a href="#">
                        <img src={Share} alt="" />
                      </a>
                      <a href="#">
                        <img src={More} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="resume-item col-md-3">
                  <div className="resume-img">
                    <img src={ResumeImage} alt="" className="img-fluid" />
                  </div>
                  <div className="resume-info d-flex justify-content-between">
                    <div className="left-info">
                      <p className="bold">Resume_1</p>
                      <ul>
                        <li>Created on: Apr 04, 2020</li>
                        <li>Modified on: Apr 04, 2020</li>
                      </ul>
                    </div>
                    <div className="right-info">
                      <a href="#">
                        <img src={Download} alt="" />
                      </a>
                      <a href="#">
                        <img src={Share} alt="" />
                      </a>
                      <a href="#">
                        <img src={More} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="resume-item col-md-3">
                  <div className="resume-img">
                    <img src={ResumeImage} alt="" className="img-fluid" />
                  </div>
                  <div className="resume-info d-flex justify-content-between">
                    <div className="left-info">
                      <p className="bold">Resume_1</p>
                      <ul>
                        <li>Created on: Apr 04, 2020</li>
                        <li>Modified on: Apr 04, 2020</li>
                      </ul>
                    </div>
                    <div className="right-info">
                      <a href="#">
                        <img src={Download} alt="" />
                      </a>
                      <a href="#">
                        <img src={Share} alt="" />
                      </a>
                      <a href="#">
                        <img src={More} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="resume-item col-md-3">
                  <div className="resume-img">
                    <img src={ResumeImage} alt="" className="img-fluid" />
                  </div>
                  <div className="resume-info d-flex justify-content-between">
                    <div className="left-info">
                      <p className="bold">Resume_1</p>
                      <ul>
                        <li>Created on: Apr 04, 2020</li>
                        <li>Modified on: Apr 04, 2020</li>
                      </ul>
                    </div>
                    <div className="right-info">
                      <a href="#">
                        <img src={Download} alt="" />
                      </a>
                      <a href="#">
                        <img src={Share} alt="" />
                      </a>
                      <a href="#">
                        <img src={More} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
