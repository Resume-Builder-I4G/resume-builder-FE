import React, { useState, useEffect } from "react";
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
import "./Experience.css";
import { arrayOfYears, arrayOfMonths } from "../../../components/DateObject";
import { Link } from "react-router-dom";

function Experience() {
  // const [title, setTitle] = useState("");
  // const [company, setCompany] = useState("");
  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  // const [description, setDescripttion] = useState("");

  // const [startMonth, setStartMonth] = useState("Month");
  // const [startYear, setStartYear] = useState("Year");

  // const [endMonth, setEndMonth] = useState("Month");
  // const [endYear, setEndYear] = useState("Year");

  // const [check, setCheck] = useState(false);

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const experienceObj = {
  //     company: company,
  //     title: title,
  //     city: city,
  //     country: country,
  //     description: description,
  //     startYear: startYear,
  //     endYear: endYear,
  //   };

  //   const experienceItems = [];
  //   experienceItems.push(experienceObj);
  //   localStorage.setItem("Experience", JSON.stringify(experienceItems));
  // };

  const [exp, setExp] = useState([
    {
      company: "",
      title: "",
      city: "",
      country: "",
      description: "",
      check: false,
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
    },
  ]);

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("Experience", JSON.stringify(exp));
  };

  //Handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...exp];
    list[index][name] = value;
    setExp(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...exp];
    list.splice(index, 1);
    setExp(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setExp([
      ...exp,
      {
        company: "",
        title: "",
        city: "",
        country: "",
        description: "",
        check: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
      },
    ]);
  };

  return (
    <div className="housing">
      <div className="container-fluid content">
        <div className="row">
          <MainContent className="col-12">
            <form onSubmit={submitHandler}>
              {exp.map((x, i) => {
                return (
                  <React.Fragment key={exp[x.company]}>
                    <div className="form-row">
                      <StyledInputForm className="form-group col-md-6">
                        <StyledInputLabel htmlFor="inputJobTitle">
                          Job Title
                        </StyledInputLabel>
                        <StyledInputInput
                          type="text"
                          className="form-control"
                          id="inputJobTitle"
                          placeholder="e.g Graphics Designer"
                          name="title"
                          value={x.title}
                          onChange={(e) => handleInputChange(e, i)}
                        />
                      </StyledInputForm>
                      <StyledInputForm className="form-group col-md-6">
                        <StyledInputLabel htmlFor="inputCompanyName">
                          Company Name
                        </StyledInputLabel>
                        <StyledInputInput
                          type="text"
                          className="form-control"
                          id="inputCompanyName"
                          placeholder="e.g Ingressive 4 Good"
                          name="company"
                          value={x.company}
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
                        Currently working here
                      </StyledInputLabel>
                    </StyledInputForm>

                    <div className="form-row mt-4">
                      <StyledInputForm className="form-group col-md-3">
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
                      <StyledInputForm className="form-group col-md-3">
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

                      <StyledInputForm className="form-group col-md-3">
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
                      <StyledInputForm className="form-group col-md-3">
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

                    <StyledInputForm className="form-group">
                      <StyledInputLabel htmlFor="inputDescription">
                        Description
                      </StyledInputLabel>
                      <StyledInputTextarea
                        className="form-control"
                        id="inputDescription"
                        rows="8"
                        onChange={(e) => handleInputChange(e, i)}
                      ></StyledInputTextarea>
                    </StyledInputForm>
                    <StyledAddItemWrap style={{ marginBottom: "30px" }}>
                      {exp.length - 1 === i && (
                        <StyledAddItemText
                          href="#"
                          button
                          onClick={handleAddClick}
                        >
                          <span className="plus"> +</span>&nbsp; Add Another
                        </StyledAddItemText>
                      )}
                      {exp.length !== 1 && (
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

            {/* <StyledAddItemWrap>
              <StyledAddItemText href="#">
                <span className="plus">+</span>&nbsp; Add Another
              </StyledAddItemText>
            </StyledAddItemWrap> */}

            <Buttons>
              <StyledPrev type="submit" onClick={submitHandler} href="#">
                <Link to="/new-resume/education">Back</Link>
              </StyledPrev>
              <StyledNext type="submit" onClick={submitHandler} href="#">
                <Link to="/new-resume/languages" className="text-white">
                  Next Section
                </Link>
              </StyledNext>
            </Buttons>
          </MainContent>
        </div>
      </div>
    </div>
  );
}

export default Experience;
