import React, { useState, useEffect } from "react";
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
  // const [certName, setCertName] = useState("");
  // const [certYear, setCertYear] = useState("");

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const certificationObj = {
  //     name: certName,
  //     year: certYear,
  //   };

  //   const certificationItems = [];
  //   certificationItems.push(certificationObj);
  //   localStorage.setItem("Cerifications", JSON.stringify(certificationItems));
  // };
  const [cert, setCert] = useState([{ certName: "", certYear: "" }]);

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
    <div className="container-fluid content">
      <MainContent className="col col-md-12 col-xs-6">
        <div>
          {/* <form onSubmit={submitHandler}> */}
          <form>
            {cert.map((x, i) => {
              return (
                <React.Fragment key={x.certName}>
                  <div className="form-row">
                    <StyledInputForm className="form-group col-md-8">
                      <StyledInputLabel htmlFor="cert">
                        Certificate
                      </StyledInputLabel>
                      <StyledInputInput
                        style={{ width: "98%" }}
                        type="text"
                        name="certName"
                        value={x.certName}
                        placeholder="e.g Figma Ambassador"
                        className="input-cert first"
                        id="cert"
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </StyledInputForm>
                    <StyledInputForm className="form-group col-md-4">
                      <StyledInputLabel htmlFor="year">Year</StyledInputLabel>
                      <StyledInputInput
                        type="Number"
                        placeholder="Year"
                        name="certYear"
                        value={x.certYear}
                        className="year-input"
                        id="year"
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </StyledInputForm>
                  </div>
                  <StyledAddItemWrap>
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
        </div>

        <div style={{ marginTop: 20 }}>{JSON.stringify(cert)}</div>
        <Buttons>
          <StyledPrev href="#">
            <Link to="/new-resume/languages">Previous</Link>
          </StyledPrev>

          <StyledNext href="#">
            <Link to="/new-resume/achivements" className="text-white">
              Next Section
            </Link>
          </StyledNext>
        </Buttons>

        {/* <Buttons>
          <StyledPrev href="#" onClick={submitHandler}>
            <Link to="/new-resume/languages">Previous</Link>
          </StyledPrev>

          <StyledNext href="#" onClick={submitHandler}>
            <Link to="/new-resume/achivements" className="text-white">
              Next Section
            </Link>
          </StyledNext>
        </Buttons> */}
      </MainContent>
    </div>
  );
}

export default Certifications;
