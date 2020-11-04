import React from "react";
import { Link, Route } from "react-router-dom";

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

function New_resume({ url }) {
  return (
    <div>
      <ENavbar />
      <div className="row">
        <div className="col-3 sidebar-container">
          <div className="sidebar">
            <div className="contain">
              {ResumeTabs.map((resumetab) => {
                return (
                  <Link to={`/new-resume/${resumetab.path}`}>
                    <div className="option">
                      <img src={resumetab.image} alt={resumetab.alt} />
                      <p>{resumetab.title}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="col-8">
          <Route
            path="/new-resume"
            render={({ match: { url } }) => {
              return (
                <>
                  <Route
                    path={`${url}/personal-info`}
                    component={Personal_info}
                  />
                  <Route path={`${url}/skills`} component={Skills} exact />
                  <Route path={`${url}/experience`} component={Experience} />
                  <Route path={`${url}/languages`} component={Language} />
                  <Route path={`${url}/achivements`} component={Achivements} />
                  <Route path={`${url}/education`} component={Education} />
                  <Route path={`${url}/references`} component={References} />
                  <Route
                    path={`${url}/certifications`}
                    component={Certifications}
                  />
                </>
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default New_resume;
