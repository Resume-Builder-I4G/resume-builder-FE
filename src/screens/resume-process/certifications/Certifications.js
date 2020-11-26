import React, { useState, useEffect } from "react";
import PreviewDownload from "../../../components/preview-download/PreviewDownload";
import {
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledNext,
  StyledPrev,
  StyledAddItemText,
  StyledAddItemWrap,
  Buttons,
  MainContent,
} from "../StyledComponents";
import "./Cerifications.css";
import { Link } from "react-router-dom";

function Certifications() {
  const [cert, setCert] = useState([{ certName: "", certYear: "" }]);

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("Cerifications", JSON.stringify(cert));
  };

  //Handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...cert];
    list[index][name] = value;
    setCert(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...cert];
    list.splice(index, 1);
    setCert(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setCert([...cert, { certName: "", certYear: "" }]);
  };

  return (
    <>
      <div id="certificate" className="container-fluid content">
        <div className="previewndownload-wrap">
          <PreviewDownload />
        </div>
        <MainContent className="main-content-body">
          <p className="head-certificate">Certificate</p>
          <form onSubmit={submitHandler}>
            {cert.map((x, i) => {
              return (
                <React.Fragment key={cert[x.certName]}>
                  <div className="form-row">
                    <StyledInputForm className="form-group col-8">
                      <StyledInputLabel htmlFor="cert">
                        Certificate
                      </StyledInputLabel>
                      <StyledInputInput
                        type="text"
                        placeholder="e.g Figma Ambassador"
                        name="certName"
                        value={x.certName}
                        onChange={(e) => handleInputChange(e, i)}
                        style={{ width: "98%" }}
                      />
                    </StyledInputForm>
                    <StyledInputForm className="form-group col-4">
                      <StyledInputLabel htmlFor="year">Year</StyledInputLabel>
                      <StyledInputInput
                        type="number"
                        placeholder="Year"
                        name="certYear"
                        value={x.certYear}
                        onChange={(e) => handleInputChange(e, i)}
                        style={{ width: "98%" }}
                      />
                    </StyledInputForm>
                  </div>
                  <StyledAddItemWrap className="addnremove-btn-container">
                    {cert.length - 1 === i && (
                      <StyledAddItemText
                        href="#"
                        button
                        onClick={handleAddClick}
                      >
                        <span className="plus"> +</span>&nbsp; Add Another
                      </StyledAddItemText>
                    )}
                    {cert.length !== 1 && (
                      <StyledAddItemText
                        href="#"
                        onClick={() => handleRemoveClick(i)}
                      >
                        <span className="plus">-</span>&nbsp; Remove
                      </StyledAddItemText>
                    )}
                  </StyledAddItemWrap>
                </React.Fragment>
              );
            })}
          </form>

          <Buttons className="nextnprev-btn-container">
            <StyledPrev href="#" onClick={submitHandler}>
              <Link to="/new-resume/languages">Back</Link>
            </StyledPrev>

            <StyledNext href="#" onClick={submitHandler}>
              <Link to="/new-resume/achivements" className="text-white">
                Next Section
              </Link>
            </StyledNext>
          </Buttons>
        </MainContent>
      </div>
    </>
  );
}

export default Certifications;
