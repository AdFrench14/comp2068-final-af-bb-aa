import React from "react";
import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">The Country</a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              Countrys
            </a>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="/">Countrys</a>
              <a className="dropdown-item" href="/new">New Country</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;