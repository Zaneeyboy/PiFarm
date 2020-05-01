import React from "react";
import {NavLink,Link} from "react-router-dom";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";


export default function Header() {

  const brandStyle={
    fontWeight:'bold',
    color:'#ffd31d',
  };


    return (
      <header>
        <Navbar className = " sticky-top navbar dark-section"
        collapseOnSelect expand = "md"
        bg = "dark"
        variant = "dark" >
            <Link style={brandStyle} to="/PiFarm" className="navbar-brand"> PiFarm</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <NavLink to="PiFarm" className="nav-item nav-link" activeClassName="active" exact={true}>
                  Home
                </NavLink>
                <NavLink to="Dashboard" className="nav-item nav-link" activeClassName="active">
                  Dashboard
                </NavLink>


            <NavDropdown title = "Account" style={{paddingTop:'0px',paddingBottom:'0px',paddingLeft:"0px",paddingRight:"0px"}}
            id = "collasible-nav-dropdown"
            className = "nav-item nav-link" >

              <Link to="/Register"  className="dropdown-item" >Register</Link>
              <div className="dropdown-divider"></div>

              <Link to="/Login"  className="dropdown-item" >Login</Link>
              <div className="dropdown-divider"></div>

              <Link to="/Logout" className="dropdown-item">Logout</Link>

            </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    );

     
}