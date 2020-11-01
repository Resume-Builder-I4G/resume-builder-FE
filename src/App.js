import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./screens/homepage/Home";
import About from "./screens/about/About";
import Contact from "./screens/contact-us/Contact";
import Error404 from "./screens/error404/Error404";
import Register from "./screens/sign_up/Signup";
import Login from "./screens/login/Login";
import Choose_color from "./screens/choose_colors/Choose_color";

//Create Resume process imports
import Create_resume from "./screens/create-resume-process/Create_resume";

import Skills from "./screens/resume-process/skills/Skill";
import Experience from "./screens/resume-process/experiences/Experience";
import Language from "./screens/resume-process/languages/Language";
import Education from "./screens/resume-process/education/Education";
import Achivements from "./screens/resume-process/achievement/Achievement";
import Personal_info from "./screens/resume-process/personal-info/Personal_info";
import Certifications from "./screens/resume-process/certifications/Certifications";
import References from "./screens/resume-process/references/References";

import { Link, Router } from "react-router-dom";
import "./screens/create-resume-process/Create_resume.css";
import ResumeTabs from "./screens/create-resume-process/Create_resume_data";
import ENavbar from "./components/resume_editing_navbar/ENavbar";

AOS.init();

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/choose-color" component={Choose_color} />
        <Route exact path="/new-resume" component={Create_resume} />
        <Route
          path="/new-resume"
          render={({ match: { url } }) => (
            <div>
              <ENavbar />
              <div class="row">
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
                </div>
              </div>
            </div>
          )}
        />

        {/* Error 404 Page Route */}
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
