import React from "react";
import {NavLink} from "react-router-dom";
export default function Header() {
    return (
      <header>
        <h1 className="nav-title">PiFarm</h1>
        <nav>
          <NavLink to="PiFarm" activeClassName="active-nav-link" exact={true}>
            Home
          </NavLink>
          <NavLink to="Dashboard" activeClassName="active-nav-link">
            Dashboard
          </NavLink>
          <NavLink to="Login" activeClassName="active-nav-link">Login</NavLink>
          <NavLink to="Logout" activeClassName="active-nav-link">Logout</NavLink>
        </nav>
      </header>
    );
}