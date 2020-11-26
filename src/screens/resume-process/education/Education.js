import React, { useState, useEffect } from "react";
import axios from "axios";
import PreviewDownload from "../../../components/preview-download/PreviewDownload";
import {
  StyledAddItemText,
  StyledInputForm,
  StyledInputInput,
  StyledInputLabel,
  StyledInputTextarea,
  StyledNext,
  StyledPrev,
  StyledAddItemWrap,
  Buttons,
  MainContent,
} from "../StyledComponents";
import "./Education.css";
import { arrayOfYears, arrayOfMonths } from "../../../components/DateObject";
import { Link } from "react-router-dom";

function Education() {
  const [edu, setEdu] = useState([
    {
      course: "",
      institution: "",
      city: "",
      country: "",
      information: "",
      check: false,
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    },
  ]);

  //Handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...edu];
    list[index][name] = value;
    setEdu(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...edu];
    list.splice(index, 1);
    setEdu(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setEdu([
      ...edu,
      {
        course: "",
        institution: "",
        city: "",
        country: "",
        information: "",
        check: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      },
    ]);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("Education", JSON.stringify(edu));
    // let bigToken = JSON.parse(localStorage.getItem("tokens"));
    // const token = bigToken.token;
    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // };
    // event.preventDefault();
    // axios
    //   .post(
    //     "https://resume-builder-i4g.herokuapp.com/education",
    //     {
    //       course: course,
    //       school: institution,
    //       start_date: `${startYear} ${startYear}`,
    //       end_date: `${endMonth} ${endYear}`,
    //       description: information,
    //     },
    //     config
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <>
      <div id="education" className="container-fluid content">
        <div className="previewndownload-wrap">
          <PreviewDownload />
        </div>
        <MainContent className="main-content-body">
          <p className="head-education">Education</p>
          <form onSubmit={submitHandler}>
            {edu.map((x, i) => {
              return (
                <React.Fragment key={edu[x.course]}>
                  <div className="form-row">
                    <StyledInputForm className="form-group col-md-6">
                      <StyledInputLabel htmlFor="inputInstitutionName">
                        Institution Name
                      </StyledInputLabel>
                      <StyledInputInput
                        type="text"
                        className="form-control"
                        id="inputInstitutionName"
                        placeholder="e.g lautech"
                        name="institution"
                        value={x.institution}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </StyledInputForm>
                    <StyledInputForm className="form-group col-md-6">
                      <StyledInputLabel htmlFor="inputCompanyName">
                        Field of Study
                      </StyledInputLabel>
                      <StyledInputInput
                        type="text"
                        className="form-control"
                        id="inputCompanyName"
                        placeholder=""
                        name="course"
                        value={x.course}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </StyledInputForm>
                  </div>

                  <div className="form-row">
                    <StyledInputForm className="form-group col-md-6">
                      <StyledInputLabel htmlFor="inputCountry">
                        Country
                      </StyledInputLabel>
                      <StyledInputInput
                        type="text"
                        className="form-control"
                        id="inputCountry"
                        placeholder="e.g Nigeria"
                        name="country"
                        value={x.country}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </StyledInputForm>
                    <StyledInputForm className="form-group col-md-6">
                      <StyledInputLabel htmlFor="inputCity">
                        City
                      </StyledInputLabel>
                      <StyledInputInput
                        type="text"
                        className="form-control"
                        id="inputCity"
                        placeholder="e.g Ogbomoso"
                        name="city"
                        value={x.city}
                        onChange={(e) => handleInputChange(e, i)}
                      />
                    </StyledInputForm>
                  </div>

                  <div className="currentlyStudy-container-desktop">
                    <StyledInputForm className="form-group check-input mr-4">
                      <StyledInputLabel
                        className="form-check-label"
                        htmlFor="checkPresent"
                      >
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="checkPresent"
                          name="check"
                          value={x.check}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                        Currently study here
                      </StyledInputLabel>
                    </StyledInputForm>
                  </div>

                  <div className="row mt-4">
                    <div className="col-6 mr-2 form-row">
                      <StyledInputForm className="form-group col-md-6">
                        <StyledInputLabel htmlFor="inputStartMonth">
                          Time Period
                        </StyledInputLabel>
                        <select
                          id="inputStartMonth"
                          className="form-control"
                          name="startMonth"
                          value={x.startMonth}
                          onChange={(e) => handleInputChange(e, i)}
                          onBlur={(e) => handleInputChange(e, i)}
                        >
                          <option>Month</option>
                          {arrayOfMonths.map((month) => {
                            return (
                              <option key={month} value={month}>
                                {month}
                              </option>
                            );
                          })}
                        </select>
                      </StyledInputForm>
                      <StyledInputForm className="form-group col-md-6">
                        <StyledInputLabel htmlFor="inputStartYear">
                          .
                        </StyledInputLabel>
                        <select
                          id="inputStartYear"
                          className="form-control"
                          name="startYear"
                          value={x.startYear}
                          onChange={(e) => handleInputChange(e, i)}
                          onBlur={(e) => handleInputChange(e, i)}
                        >
                          <option>Year</option>
                          {arrayOfYears().map((year) => {
                            return (
                              <option key={year} value={year}>
                                {year}
                              </option>
                            );
                          })}
                        </select>
                      </StyledInputForm>
                    </div>
                    <div className="col-6 form-row">
                      <StyledInputForm className="form-group col-md-6">
                        <StyledInputLabel htmlFor="inputEndMonth">
                          .
                        </StyledInputLabel>
                        {x.check ? (
                          <select
                            id="inputEndMonth"
                            className="form-control"
                            disabled={true}
                            name="endMonth"
                            value={x.endMonth}
                            onChange={(e) => handleInputChange(e, i)}
                            onBlur={(e) => handleInputChange(e, i)}
                          >
                            <option>Month</option>
                            {arrayOfMonths.map((month) => {
                              return (
                                <option key={month} value={month}>
                                  {month}
                                </option>
                              );
                            })}
                          </select>
                        ) : (
                          <select
                            id="inputEndMonth"
                            className="form-control"
                            name="endMonth"
                            value={x.endMonth}
                            onChange={(e) => handleInputChange(e, i)}
                            onBlur={(e) => handleInputChange(e, i)}
                          >
                            <option>Month</option>
                            {arrayOfMonths.map((month) => {
                              return (
                                <option key={month} value={month}>
                                  {month}
                                </option>
                              );
                            })}
                          </select>
                        )}
                      </StyledInputForm>
                      <StyledInputForm className="form-group col-md-6">
                        <StyledInputLabel htmlFor="inputEndYear">
                          .
                        </StyledInputLabel>
                        {x.check ? (
                          <select
                            id="inputEndYear"
                            className="form-control"
                            disabled={true}
                            name="endYear"
                            value={x.endYear}
                            onChange={(e) => handleInputChange(e, i)}
                            onBlur={(e) => handleInputChange(e, i)}
                          >
                            <option>Year</option>
                            {arrayOfYears().map((year) => {
                              return (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              );
                            })}
                          </select>
                        ) : (
                          <select
                            id="inputEndYear"
                            className="form-control"
                            name="endYear"
                            value={x.endYear}
                            onChange={(e) => handleInputChange(e, i)}
                            onBlur={(e) => handleInputChange(e, i)}
                          >
                            <option>Year</option>
                            {arrayOfYears().map((year) => {
                              return (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              );
                            })}
                          </select>
                        )}
                      </StyledInputForm>
                    </div>
                  </div>

                  <StyledInputForm className="form-group">
                    <StyledInputLabel htmlFor="inputDescription">
                      Other Information
                    </StyledInputLabel>
                    <StyledInputTextarea
                      className="form-control other-info-box"
                      id="inputDescription"
                      rows="8"
                      onChange={(e) => handleInputChange(e, i)}
                    ></StyledInputTextarea>
                  </StyledInputForm>
                  <StyledAddItemWrap
                    className="addnremove-btn-container"
                    style={{ marginBottom: "30px" }}
                  >
                    {edu.length - 1 === i && (
                      <StyledAddItemText
                        href="#"
                        button
                        onClick={handleAddClick}
                      >
                        <span className="plus"> +</span>&nbsp; Add Another
                      </StyledAddItemText>
                    )}
                    {edu.length !== 1 && (
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
            <StyledPrev type="submit" onClick={submitHandler} href="#">
              <Link to="/new-resume/personal-info">Back</Link>
            </StyledPrev>

            <StyledNext type="submit" onClick={submitHandler} href="#">
              <Link to="/new-resume/experience" className="text-white">
                Next Section
              </Link>
            </StyledNext>
          </Buttons>
        </MainContent>
      </div>
    </>
  );
}

export default Education;
