import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PreviewDownload from "../../../components/preview-download/PreviewDownload";
import {
  Buttons,
  MainContent,
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
} from "../StyledComponents";
import "./Personal_info.css";

function Personal_info() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const personalInfo = {
      name: `${firstName} ${lastName}`,
      email: email,
      phone: phone,
      address: location,
      about: summary,
    };

    localStorage.setItem("Personal_info", JSON.stringify(personalInfo));
  };

  return (
    <>
      <div id="personal-info" className="container-fluid content">
        <div className="previewndownload-wrap">
          <PreviewDownload />
        </div>

        <MainContent className="main-content-body">
          <p className="head-personal-info">Personal Info</p>
          <form onSubmit={submitHandler}>
            <div className="form-row">
              <StyledInputForm className="form-group col-md-6">
                <StyledInputLabel htmlFor="inputFirstName">
                  First Name
                </StyledInputLabel>
                <StyledInputInput
                  style={{ width: "100%" }}
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="e.g John"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </StyledInputForm>
              <StyledInputForm className="form-group col-md-6">
                <StyledInputLabel htmlFor="inputLastName">
                  Last Name
                </StyledInputLabel>
                <StyledInputInput
                  style={{ width: "100%" }}
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="e.g Doe"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </StyledInputForm>
            </div>

            <StyledInputForm className="form-group">
              <StyledInputLabel htmlFor="inputEmail">
                Email Address
              </StyledInputLabel>
              <StyledInputInput
                type="email"
                className="form-control"
                id="inputEmail"
                placeholder="example@gmail.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </StyledInputForm>

            <StyledInputForm className="form-group">
              <StyledInputLabel htmlFor="inputPhoneNumber">
                Phone Number
              </StyledInputLabel>
              <StyledInputInput
                type="tel"
                className="form-control"
                id="inputPhoneNumber"
                placeholder="080 000 0000"
                onChange={(event) => setPhone(event.target.value)}
              />
            </StyledInputForm>

            <StyledInputForm className="form-group">
              <StyledInputLabel htmlFor="inputLocation">
                Location
              </StyledInputLabel>
              <StyledInputInput
                type="text"
                className="form-control"
                id="inputLocation"
                placeholder="e.g Lagos Nigeria"
                onChange={(event) => setLocation(event.target.value)}
              />
            </StyledInputForm>

            <StyledInputForm className="form-group">
              <StyledInputLabel htmlFor="inputProfSummary">
                Summary
              </StyledInputLabel>
              <StyledInputTextarea
                className="form-control summary-box"
                id="inputProfSummary"
                rows="8"
                onChange={(event) => setSummary(event.target.value)}
              ></StyledInputTextarea>
            </StyledInputForm>
          </form>

          <Buttons className="nextandprev-btn-container">
            <StyledNext type="submit" onClick={submitHandler}>
              <Link to="/new-resume/education" className="text-white">
                Next Section
              </Link>
            </StyledNext>
          </Buttons>
        </MainContent>
      </div>
    </>
  );
}

export default Personal_info;
