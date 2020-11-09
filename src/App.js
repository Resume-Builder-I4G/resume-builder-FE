import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getToken, removeUserSession, setUserSession } from "./utils/Common";

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
import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./utils/PublicRoutes";

AOS.init();

function App(props) {
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      return;
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get("https://resume-builder-i4g.herokuapp.com/user", config)
      .then((response) => {
        console.log(response);
        // setUserSession(response.data.token, response.data.user);
        // setAuthLoading(false);
        const str = response.config.headers.Authorization;
        const result = str.replace("Bearer ", "");
        console.log(result);
        setUserSession(result, response.data);
        setAuthLoading(false);
      })
      .catch((error) => {
        console.log(error);
        removeUserSession();
        setAuthLoading(false);
      });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication...</div>;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <PublicRoute path="/about" component={About} />
        <PublicRoute path="/contact" component={Contact} />
        <PublicRoute path="/sign-in" component={SignIn} />
        <PublicRoute path="/sign-up" component={SignUp} />

        {/* Private Route available to only authenticated User */}
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/new-resume" component={New_resume} />
        <PrivateRoute path="/template-a" component={TemplateA} />

        {/* Error 404 - Page Not Found */}
        <Route path="*" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
