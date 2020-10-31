import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="container-fluid content">
      <div className="row">
        <div className="col-12 main-content">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6 input-form">
                <label for="inputJobTitle">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputJobTitle"
                  placeholder="e.g Graphics Designer"
                />
              </div>
              <div className="form-group col-md-6 input-form">
                <label for="inputCompanyName">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCompanyName"
                  placeholder="e.g Ingressive 4 Good"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6 input-form">
                <label for="inputCountry">Country</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCountry"
                  placeholder="e.g Nigeria"
                />
              </div>

              <div className="form-group col-md-6 input-form">
                <label for="inputCity">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  placeholder="e.g Ogbomoso"
                />
              </div>
            </div>

            <div className="form-group input-form check-input mr-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="checkPresent"
              />
              <label className="form-check-label" for="checkPresent">
                Currently working here
              </label>
            </div>

            <div className="form-row mt-4">
              <div className="form-group input-form col-md-3">
                <label for="inputStartMonth">Time Period</label>
                <select id="inputStartMonth" className="form-control">
                  <option selected>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div className="form-group input-form col-md-3">
                <label for="inputStartYear">.</label>
                <select id="inputStartYear" className="form-control">
                  <option selected>Year</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                  <option>1999</option>
                  <option>1998</option>
                  <option>1997</option>
                  <option>1996</option>
                  <option>1995</option>
                  <option>1994</option>
                  <option>1993</option>
                  <option>1992</option>
                  <option>1991</option>
                  <option>1990</option>
                </select>
              </div>

              <div className="form-group input-form col-md-3">
                <label for="inputStartMonth">.</label>
                <select id="inputStartMonth" className="form-control">
                  <option selected>Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>
              <div
                className="form-group input-form
                         col-md-3"
              >
                <label for="inputStartYear">.</label>
                <select id="inputStartYear" className="form-control">
                  <option selected>Year</option>
                  <option>2020</option>
                  <option>2019</option>
                  <option>2018</option>
                  <option>2017</option>
                  <option>2016</option>
                  <option>2015</option>
                  <option>2014</option>
                  <option>2013</option>
                  <option>2012</option>
                  <option>2011</option>
                  <option>2010</option>
                  <option>2009</option>
                  <option>2008</option>
                  <option>2007</option>
                  <option>2006</option>
                  <option>2005</option>
                  <option>2004</option>
                  <option>2003</option>
                  <option>2002</option>
                  <option>2001</option>
                  <option>2000</option>
                  <option>1999</option>
                  <option>1998</option>
                  <option>1997</option>
                  <option>1996</option>
                  <option>1995</option>
                  <option>1994</option>
                  <option>1993</option>
                  <option>1992</option>
                  <option>1991</option>
                  <option>1990</option>
                </select>
              </div>
            </div>

            <div className="form-group input-form">
              <label for="inputDescription">Description</label>
              <textarea
                className="form-control"
                id="inputDescription"
                rows="8"
              ></textarea>
            </div>
          </form>

          <div className="add-item">
            <a className="addItem" href="#">
              <span className="plus">+</span>&nbsp; Add Another
            </a>
          </div>

          <div className="buttons">
            <a className="previous" href="#">
              Back
            </a>
            <a className="next" href="#">
              Next Section
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
