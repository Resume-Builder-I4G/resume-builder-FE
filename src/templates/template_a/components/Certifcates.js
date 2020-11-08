import React from "react";
import { CertText, StyledH2 } from "./StyledComponents";

function Certifcates({ certificateItems }) {
  // const name = { ...certName };

  // const newObject = {};
  // newObject.name = name;

  return (
    <div>
      <StyledH2>Certificates</StyledH2>
      <ul>
        {certificateItems.map((item) => {
          return (
            <li style={{ marginBottom: "5px" }} key={item.certName}>
              <div className="d-flex justify-content-between">
                <CertText className="name">{item.certName}</CertText>
                <CertText className="year">
                  <i>{item.certYear}</i>
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
