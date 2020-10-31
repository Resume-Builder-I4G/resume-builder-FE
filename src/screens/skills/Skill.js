import React from 'react';
import "./Skill.css";

function Skill() {
    return (
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form>
              <div className="form-group input-form">
                <label for="inputSkills">Skills</label>
                <textarea
                  className="form-control"
                  id="inputSkills"
                  rows="8"
                ></textarea>
              </div>
            </form>

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

export default Skill;
