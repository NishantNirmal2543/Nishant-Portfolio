import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../style.scss";

const Navba = () => {
  const [navbarExpanded, setNavbarExpanded] = useState(false);
  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/About",
      name: "About",
    },
    {
      path: "/Portfolio",
      name: "Portfolio",
    },
    {
      path: "/Contact",
      name: "Contact",
    },
  ];

  return (
    <Navbar
      className={`navbar ${navbarExpanded ? "expanded" : ""}`}
      expand="lg"
      expanded={navbarExpanded}>
      <Container>
        <Navbar.Brand className="brand" href="/">
          <h1>Nishant</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setNavbarExpanded(!navbarExpanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav" className="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <NavLink
                to={item.path}
                key={item.name}
                style={{ textDecoration: "none" }}>
                <div className="list_item">{item.name}</div>
              </NavLink>
            ))}
          </Nav>
          <Nav className="ms-auto">
            <Link className=" hire-me-button " to="/Contact">
              Hire Me
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navba;
