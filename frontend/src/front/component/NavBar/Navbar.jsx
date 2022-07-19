import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function _Navbar() {
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        className="fixed-top"
        style={{ backgroundColor:'#051010'  /*"#2f07ff"  */ }}
      >
        {/* <img style={{width:'180px',height:'60px'}} src={salem}/> */}
        <div
          className="container-fluid mx-2"
          style={{
            backgroundColor: "#05101c",
            color: "green",
            fontSize: "20px",
          }}
        >
          <Navbar.Brand as={Link} to={"/Robot-Care/home"}>
            <i
              style={{
                width: "120px",
                color: "white",
                backgroundColor: "black",
                fontSize: "30px",
                fontWeight: "30px",
                border: "5px solid black",
                borderRadius: "20%",
              }}
            >
              <span style={{ color: "green" }}>Care</span>Me
            </i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/Robot-Care"}>
                Home
              </Nav.Link>
             
              <Nav.Link as={Link} to={"/Robot-Care/Prediction"}>
                Diagnoses
              </Nav.Link>
              <Nav.Link as={Link} to={"/Robot-Care/FirstAid"}>
                First Aid
              </Nav.Link>
              <Nav.Link as={Link} to={"/Robot-Care/FirstAid"}>
                Online Chat
              </Nav.Link>
              <Nav.Link as={Link} to={"/Robot-Care/About"}>
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav style={
              {
                position: "absolute",
                left:"87%"
              }
            }>
              <Link id="lang1" className=" nav-link nav-item btn  active" to="/login">Sign In</Link>

              <Link id="lang2" className="nav-link nav-item btn  active " to="/register">Sign Up</Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
