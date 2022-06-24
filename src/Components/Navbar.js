import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} border border-${
          props.mode === "dark" ? "white" : "dark"
        }`}
      >
        <div className="container-fluid">
          <a className="navbar-brand display-4" href="/">
            <b>
              {" "}
              <u> {props.title}</u>
            </b>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars navbar-toggler-icon"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <button
          type="button"
          className={`btn btn-${props.mode}  mx-0`}
          onClick={props.togglemode}
        >
          {props.btntext}
        </button>
      </nav>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Text Analyzer",
};
