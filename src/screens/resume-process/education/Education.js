import React from "react";
import "./Education.module.css";

function Education({ menu, activeMenu }) {
  activeMenu(1);
  return (
    <div>
      <div class="container-fluid content">
        <div class="row">
          <div class="col-12 main-content">
            <form>
              <div class="form-row">
                <div class="form-group col-xs-6 input-form">
                  <label for="inputInstitutionName">Institution Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputInstitutionName"
                    placeholder="e.g Lautech"
                  />
                </div>
                <div class="form-group col-xs-6 input-form">
                  <label for="inputFieldName">Field of Study</label>
                  <input type="text" class="form-control" id="inputFieldName" />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-xs-6 input-form">
                  <label for="inputCountry">Country</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCountry"
                    placeholder="e.g Nigeria"
                  />
                </div>

                <div class="form-group col-xs-6 input-form">
                  <label for="inputCity">City</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="e.g Ogbomoso"
                  />
                </div>
              </div>

              <div class="form-group input-form check-input">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="checkPresent"
                />
                <label class="form-check-label" for="checkPresent">
                  Currently study here
                </label>
              </div>

              <div class="form-row">
                <div class="form-group input-form col-xs-3">
                  <label for="inputStartMonth">Time Period</label>
                  <select id="inputStartMonth" class="form-control">
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
                <div class="form-group input-form col-xs-3">
                  <label for="inputStartYear">.</label>
                  <select id="inputStartYear" class="form-control">
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

                <div class="form-group input-form col-xs-3">
                  <label for="inputStartMonth">.</label>
                  <select id="inputStartMonth" class="form-control">
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
                  class="form-group input-form
                         col-xs-3"
                >
                  <label for="inputStartYear">.</label>
                  <select id="inputStartYear" class="form-control">
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

              <div class="form-group input-form">
                <label for="inputOtherInfo">Other Information</label>
                <textarea
                  class="form-control"
                  id="inputOtherInfo"
                  rows="8"
                ></textarea>
              </div>
            </form>

            <div class="add-item">
              <a class="addItem" href="#">
                <span class="plus">+</span>&nbsp; Add Another
              </a>
            </div>

            <div class="buttons">
              <a class="previous" href="#">
                Back
              </a>
              <a class="next" href="#">
                Next Section
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
