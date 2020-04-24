import React from "react";
import {NavLink,Link} from "react-router-dom";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";


export default function Header() {

  const brandStyle={
    fontWeight:'bold',
    color:'#ffd31d',
  }

    return (
      <header>
        <Navbar Navbar className = " sticky-top navbar dark-section"
        collapseOnSelect expand = "md"
        bg = "dark"
        variant = "dark" >
          <Navbar.Brand href=""> 
            <Link style={brandStyle} to="/PiFarm" className="navbar-brand"> PiFarm</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="">
                <NavLink to="PiFarm" className="nav-item nav-link" activeClassName="active" exact={true}>
                  Home
                </NavLink>
            </Nav.Link>

            <Nav.Link href="">
                <NavLink to="Dashboard" className="nav-item nav-link" activeClassName="active">
                  Dashboard
                </NavLink>
            </Nav.Link>

            <NavDropdown title="Account" id="collasible-nav-dropdown" className="nav-item nav-link">
              <NavDropdown.Item href=""><Link to="Login" className="nav-item" >Login</Link></NavDropdown.Item>
              <NavDropdown.Item href=""><Link to="Logout" className="nav-item">Logout</Link></NavDropdown.Item>
            </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* <nav className="navbar sticky-top navbar-expand-lg navbar-dark dark-section">
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
          
        </nav> */}
      </header>
    );

     
}