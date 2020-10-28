import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// import About from "./screens/about/About";
// // import "./bootstrap/dist/css/bootstrap.min.css";
import About from "./screens/about/About";
import Contact from "./screens/contact-us/Contact";
import Error404 from "./screens/error404/Error404";

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route path="/" component={Home} /> */}
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
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
