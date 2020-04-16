import React from "react";
import {NavLink} from "react-router-dom";
export default function Header() {
    return (
      <header>
        <h1 className="nav-title">PiFarm</h1>
        <nav>
          <NavLink to="/" activeClassName="active-nav-link" exact={true}>
            Home
          </NavLink>
          <NavLink to="Dashboard" activeClassName="active-nav-link">
            Dashboard
          </NavLink>
        </nav>
      </header>
    );
}