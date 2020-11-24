import React from "react";
import { Link } from "react-router-dom";
import Daniel from "../../assets/images/user_dashboard/Daniel.png";
import "./Dashboard_Nav.css";

function Dashboard_Nav(props) {
  return (
    <nav className="navbar navbar-css navbar-expand-lg navbar-light bg-primary sticky-top">
      <div className="container">
        <Link to="/">
          <a className="navbar-brand text-white logo">ResumeBuilder</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <img className="img-fluid" src="./assets/images/navicon.png" alt="" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link to="/contact">
                <a className="nav-link text-light" href=""></a>
              </Link>
            </li> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link text-light dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={Daniel} alt="" />
                Awojide Daniel
              </a>
              <div
                class="dropdown-menu bg-white text-center px-4 py-3"
                aria-labelledby="navbarDropdown"
              >
                <p className="name">Awojide Daniel</p>
                <p className="email">awojidedaniel@gmail.com</p>
                <div className="btn-wrap w-100 d-flex justify-content-between">
                  <button className="settings-btn px-3 py-2 mr-4">
                    Settings
                  </button>
                  <button
                    className="log-out-btn px-1 py-2"
                    onClick={props.handleLogout}
                  >
                    Log Out
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Dashboard_Nav;
