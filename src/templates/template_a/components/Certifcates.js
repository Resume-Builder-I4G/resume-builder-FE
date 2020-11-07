import React from "react";
import { StyledH2 } from "./StyledComponents";

function Certifcates({ certificateItems }) {
  return (
    <div>
      <StyledH2>Certificates</StyledH2>
      <ul>
        {/* {certificateItems.map((item) => {
          return (
            <li key={item.name}>
              <div className="d-flex justify-content-between">
                <span className="name">{item.name}</span>
                <span className="year">{item.year}</span>
              </div>
            </li>
          );
        })} */}
        <li key={certificateItems.name}>
          <div className="d-flex justify-content-between">
            <span className="name">{certificateItems.name}</span>
            <span className="year">{certificateItems.year}</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Certifcates;
