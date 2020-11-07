import React from "react";
import { CertText, StyledH2 } from "./StyledComponents";

function Certifcates({ certificateItems }) {
  return (
    <div>
      <StyledH2>Certificates</StyledH2>
      <ul>
        {certificateItems.map((item) => {
          return (
            <li key={item.name}>
              <div className="d-flex justify-content-between">
                <CertText className="name">{item.name}</CertText>
                <CertText className="year">
                  <i>{item.year}</i>
                </CertText>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Certifcates;
