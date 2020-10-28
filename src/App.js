import React from "react";
import Footer from "./components/Footer/Footer";
// import About from "./screens/about/About";
// // import "./bootstrap/dist/css/bootstrap.min.css";
import About from "./screens/about/About";
import Contact from "./screens/contact-us/Contact";

function App() {
  return (
    <div className="App">
      {/* <About /> */}
      <Contact />
      <Footer />
      {/* <GlobalFonts /> */}
      {/* <Success /> */}
    </div>
  );
}

export default App;
