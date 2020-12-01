import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Header () {
  return (
    <ReactBootStrap.Navbar collapseOnSelect sticky="top" expand="lg" bg="dark" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">UpVoTe</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">      
          <ReactBootStrap.Nav.Link href="#NewItem">Create Post</ReactBootStrap.Nav.Link>  
          <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link> 
        </ReactBootStrap.Nav>
        <ReactBootStrap.Nav>
          <ReactBootStrap.Nav.Link href="#cart">Cart</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>  
    </ReactBootStrap.Navbar>
  );
  }

export default Header;