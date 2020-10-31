import React from "react";
import "./Personal_info.module.css";

function Personal_info({ menu, activeMenu }) {
  activeMenu(0);
  return (
    <div>
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form>
              <div className="form-row">
                <div className="form-group col-xs-6 input-form">
                  <label for="inputFirstName">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputFirstName"
                    placeholder="e.g John"
                  />
                </div>
                <div className="form-group col-xs-6 input-form">
                  <label for="inputLastName">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="e.g Doe"
                  />
                </div>
              </div>

              <div className="form-group input-form">
                <label for="inputEmail">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="form-group input-form">
                <label for="inputPhoneNumber">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputPhoneNumber"
                  placeholder="080 000 0000"
                />
              </div>

              <div className="form-group input-form">
                <label for="inputLocation">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLocation"
                  placeholder="e.g Lagos Nigeria"
                />
              </div>

              <div className="form-group input-form">
                <label for="inputProfSummary">Summary</label>
                <textarea
                  className="form-control"
                  id="inputProfSummary"
                  rows="8"
                ></textarea>
              </div>
            </form>

            <div className="button">
              <a className="next" href="#">
                Next Section
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal_info;
