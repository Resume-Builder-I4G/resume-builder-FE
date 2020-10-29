import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./screens/homepage/Home";
import About from "./screens/about/About";
import Contact from "./screens/contact-us/Contact";
import Error404 from "./screens/error404/Error404";

AOS.init();

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error404} />
      </Switch>
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Error404 /> */}
      {/* <Footer /> */}
      {/* <GlobalFonts /> */}
      {/* <Success /> */}
    </div>
  );
}

export default App;
