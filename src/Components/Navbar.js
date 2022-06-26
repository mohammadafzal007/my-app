import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom";


const Navbar = (props) => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} border border-${
          props.mode === "dark" ? "white" : "dark"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand display-4" to="/">
            <b>
              {" "}
              <u> {props.title}</u>
            </b>
          </Link>

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
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
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
