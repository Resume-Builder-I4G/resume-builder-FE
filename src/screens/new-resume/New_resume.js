import React, { Component } from "react";
import { Link, NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import ResumeTabs from "./Imports";
import ENavbar from "../../components/resume_editing_navbar/ENavbar";

import "./New_resume.css";

//Create Resume process imports

import Skills from "../../screens/resume-process/skills/Skill";
import Experience from "../../screens/resume-process/experiences/Experience";
import Language from "../../screens/resume-process/languages/Language";
import Education from "../../screens/resume-process/education/Education";
import Achivements from "../../screens/resume-process/achievement/Achievement";
import Personal_info from "../../screens/resume-process/personal-info/Personal_info";
import Certifications from "../../screens/resume-process/certifications/Certifications";
import References from "../../screens/resume-process/references/References";

//Some Styled Components
const Option = styled.div`
  width: 130px;
  height: 130px;
  background: #ffffff;
  border-radius: 6px;
  text-align: center;
  color: #cccccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 10px 10px;
  filter: drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.15));
`;
const Img = styled.img`
  margin-top: 20px;
`;
const StyledP = styled.p`
  width: 105px;
  margin: auto;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
`;

class New_resume extends Component {
  state = {
    arr: ResumeTabs,
    selected: "",
  };
  changeColor = (id) => {
    this.setState({ selected: id });
  };

  render() {
    const { selected, arr } = this.state;
    return (
      <div>
        <ENavbar />
        <div className="row">
          <div className="col-md-3 sidebar-container">
            <div className="sidebar">
              <div className="contain">
                {arr.map(({ id, image, title, alt, path }) => {
                  return (
                    <NavLink
                      activeClassName="active-tab"
                      key={id}
                      to={`/new-resume/${path}`}
                    >
                      <Option onClick={() => this.changeColor(id)} key={id}>
                        <Img src={image} alt={alt} />
                        <StyledP>{title}</StyledP>
                      </Option>
                      {}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="col-md-8">
            <Route
              path="/new-resume"
              render={({ match: { url } }) => {
                return (
                  <>
                    <Switch>
                      <Route
                        path={`${url}/personal-info`}
                        component={Personal_info}
                      />
                      <Route path={`${url}/skills`} component={Skills} />
                      <Route
                        path={`${url}/experience`}
                        component={Experience}
                      />
                      <Route path={`${url}/languages`} component={Language} />
                      <Route
                        path={`${url}/achivements`}
                        component={Achivements}
                      />
                      <Route path={`${url}/education`} component={Education} />
                      <Route
                        path={`${url}/references`}
                        component={References}
                      />
                      <Route
                        path={`${url}/certifications`}
                        component={Certifications}
                      />
                    </Switch>
                  </>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default New_resume;
