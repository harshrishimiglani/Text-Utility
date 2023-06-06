import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // return mode-code according to mode selected
  const navCol = (mode) => {
    if (mode === "dark" || mode === "light") return mode;
    if (mode === "green") return "primary";
    else return "danger";
  };

  return (
    <>
      <nav
        id="nav-bar"
        className=
        {
          `navbar 
          navbar-expand-lg 
          navbar-${navCol(props.mode)} 
          bg-${navCol(props.mode)}`
        } 
      >
        <div className="container-fluid">
          <Link className="navbar-brand nav-text-col" to="/" id="nav-title">
            {props.title}
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
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link nav-text-col active"
                  aria-current="page"
                  id="nav-home"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-text-col"
                  id="nav-about"
                  to="/about"
                >
                  {props.aboutText}
                </Link>
              </li>
            </ul>

            <div>
              <button
                type="button"
                className="btn btn-dark mx-2 border-dark"
                onClick={() => props.changeMode("dark")}
              >
                Dark
              </button>
              <button
                type="button"
                className="btn btn-light mx-2 border-dark"
                onClick={() => props.changeMode("light")}
              >
                Light
              </button>
              <button
                type="button"
                className="btn btn-success mx-2 border-dark"
                onClick={() => props.changeMode("green")}
              >
                Green
              </button>
              <button
                type="button"
                className="btn btn-primary mx-2 border-dark"
                onClick={() => props.changeMode("blue")}
              >
                Blue
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

// Set title and aboutText to String
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

// Incase title and abouText are not given use this
Navbar.defaultProps = {
  title: "Set your title",
  aboutText: "Write About Text Here",
};
