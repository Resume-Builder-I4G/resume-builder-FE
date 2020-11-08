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
import TemplateA from "./templates/template_a/Template_A";
import Choose_color from "./screens/choose_colors/Choose_color";
import Dashboard from "./screens/user_dashboard/Dashboard";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUp} />

      {/* Private Route available to only authenticated User */}
      <PrivateRoute path="/dashboard" component={Dashboard} />
      <PrivateRoute path="/new-resume" component={New_resume} />
      <PrivateRoute path="/template-a" component={TemplateA} />

      {/* Error 404 - Page Not Found */}
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
