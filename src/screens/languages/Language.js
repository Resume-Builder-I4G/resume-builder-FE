import React from 'react';
import "./Language.css";

function Language() {
    return (
      <div className="container-fluid content">
        <div className="row">
          <div className="col-12 main-content">
            <form>
              <div className="form-group input-form">
                <label for="inputLanguages">Langauges (%)</label>
                <textarea
                  className="form-control"
                  id="inputLanguages"
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

export default Language;
