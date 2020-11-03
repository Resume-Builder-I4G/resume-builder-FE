import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoutes";

// Important pages
import Home from "./screens/homepage/Home";
import About from "./screens/about/About";
import Contact from "./screens/contact-us/Contact";
import Error404 from "./screens/error404/Error404";
import SignUp from "./screens/sign_up/Signup";
import SignIn from "./screens/sign_in/SignIn";
import New_resume from "./screens/new-resume/New_resume";
import Choose_color from "./screens/choose_colors/Choose_color";
import Dashboard from "./screens/user_dashboard/Dashboard";

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

import "./screens/create-resume-process/Create_resume.css";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />

      {/* Private Route available to only authenticated User */}
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/new-resume" component={New_resume} />

      {/* Error 404 - Page Not Found */}
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
