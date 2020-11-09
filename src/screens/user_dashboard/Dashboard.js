import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import Navbar from "../../components/dashboard_navbar/Dashboard_Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth } from "../../context/auth";

import Grid from "../../assets/svgs/user_dashboard/grid.svg";
import List from "../../assets/svgs/user_dashboard/list.svg";
import Download from "../../assets/svgs/user_dashboard/download.svg";
import Share from "../../assets/svgs/user_dashboard/share.svg";
import More from "../../assets/svgs/user_dashboard/more-horizontal.svg";
import ResumeImage from "../../assets/images/user_dashboard/resume-image.png";
import styled from "styled-components";
import NewResume from "../new-resume/New_resume";
import { getUser, removeUserSession } from "../../utils/Common";

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

function Dashboard(props) {
  const user = getUser();
  const listOfResumes = [];

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/sign-in");
    console.log("log out");
  };

  return (
    <div id="dashboard">
      <Navbar handleLogout={handleLogout} />
      <div className="body">
        <div className="container">
          <div className="topbar d-flex justify-content-between">
            <div>
              <StyledWelcomeMsg>
                Glad to have you back, {user.name}
              </StyledWelcomeMsg>
              <StyledInfo>
                One of your resume is still missing your personal details.
              </StyledInfo>
            </div>
            <div className="new-resume-btn text-center">
              <Link to="/new-resume">
                <button href="#" className="btn btn-primary">
                  New Resume
                </button>
              </Link>
            </div>
          </div>
          <div className="search-bar-container mt-4">
            <input type="text" />
          </div>
          <div className="resumes-container mt-4">
            <div className="bar d-flex justify-content-between mb-3">
              <span>Your resumes</span>
              <div className="resume-options d-flex">
                <select
                  id="resumeOption"
                  className="form-control"
                  value="Last Opened"
                  onChange={(e) => {}}
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
                  <div key={Date.now}>
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
