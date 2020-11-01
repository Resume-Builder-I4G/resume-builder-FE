import React from "react";
import "./Cerifications.css";

function Certifications() {
  return (
    <div className="container-fluid content">
      <div className="col col-md-8 col-xs-6 main-content">
        <span className="cert-text">Certificate</span>
        <span className="year-text">Year</span>
        <li className="resume-cert">
          <input
            type="text"
            name="certificate"
            placeholder="e.g Figma Ambassador"
            className="input-cert first"
            id=""
          />{" "}
          <input
            type="Number"
            placeholder="Year"
            name="year"
            className="year-input"
            id=""
          />
        </li>

        <li className="resume-cert">
          <input
            type="text"
            name="certificate"
            placeholder="e.g Figma Ambassador"
            className="input-cert"
            id=""
          />{" "}
          <input
            type="Number"
            placeholder="Year"
            className="year-input"
            name="year"
            id=""
          />
        </li>
        <li className="resume-cert">
          <input
            type="text"
            className="input-cert"
            placeholder="e.g Figma Ambassador"
            name="certificate"
            id=""
          />{" "}
          <input
            type="Number"
            placeholder="Year"
            className="year-input"
            name="year"
            id=""
          />
        </li>
        <li>
          <button className="addmore">+ Add Another</button>
        </li>
        <br></br>
        <div className="col-md-12 done-btn">
          <li>
            <a href="">
              <button className="next">Next Section</button>
            </a>{" "}
            <a href="">
              <button className="previous">Previous</button>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
