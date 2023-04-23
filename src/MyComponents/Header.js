import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  let css={
    padding:"0px",
    backgroundColor: "#e1effd",
   
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={css}>
      <div className="container-fluid" style={props.mode}>
        <a className="navbar-brand " href="/" style={props.mode}>
          {props.title}
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a  className="nav-link active" aria-current="page" href="/" style={props.mode}>
                Home
              </a>
            </li>
            
          </ul>
          
          <div className="form-check form-switch" >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              value={props.btnText}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              style={props.mode}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {props.btnText}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: " Enter your title here",
  About: "About",
};
