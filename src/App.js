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
import ENavbar from "./components/resume_editing_navbar/ENavbar";
import Create_resume from "./screens/create-resume-process/Create_resume";
import Choose_color from "./screens/choose_colors/Choose_color";

AOS.init();

function App() {
  return (
    <div className="App">
      {/* <ENavbar />
      <Create_resume /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/choose-color" component={Choose_color} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
