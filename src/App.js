import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./screens/homepage/Home";
import About from "./screens/about/About";
import Contact from "./screens/contact-us/Contact";
import Error404 from "./screens/error404/Error404";
import Register from "./screens/sign_up/Signup";
import ENavbar from "./components/resume_editing_navbar/ENavbar";
import Experience from "./screens/experiences/Experience"

AOS.init();

function App() {
  return (
    <div className="App">
      {/* <ENavbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/experience" component={Experience} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
