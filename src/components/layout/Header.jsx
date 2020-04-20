import React from "react";
import {NavLink,Link} from "react-router-dom";
export default function Header() {
    return (
      <header>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark dark-section">
        <Link to="PiFarm" className="navbar-brand">PiFarm</Link>
        <div className="navbar-nav ml-auto">
          <NavLink to="PiFarm" className="nav-item nav-link" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="Dashboard" className="nav-item nav-link" activeClassName="active">
            Dashboard
          </NavLink>
          <NavLink to="Login" className="nav-item nav-link" activeClassName="active">Login</NavLink>
          <NavLink to="Logout" className="nav-item nav-link" activeClassName="active">Logout</NavLink>
        </div>
          
        </nav>
      </header>
    );
}