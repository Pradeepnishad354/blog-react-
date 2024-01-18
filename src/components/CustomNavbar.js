import React from "react";
import { useState } from "react";
import{NavLink as ReactLink} from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
const CustomNavbar = () => {

    const[isOpen,isSetOpen]=useState(false)


  return (
    <div>
      <Navbar color="success"  expand="md" fixed="">
        <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
        <NavbarToggler onClick={()=>isSetOpen(!isOpen)}/>
       
        <Collapse isOpen={isOpen}  navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/signup">
                Signup
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu >
                <DropdownItem tag={ReactLink} to="/services" >Services</DropdownItem>
                <DropdownItem>Contactus</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText tag={ReactLink} to="https:www.youtube.com" style={{textDecoration:"none"}} >Youtube</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
