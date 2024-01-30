import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink as ReactLink, useNavigate } from "react-router-dom";
import { doLogout } from "../auth";
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
import { getCurrentUserDetail, isLoggedIn } from "../auth";



const CustomNavbar = () => {
  const [isOpen, isSetOpen] = useState(false);

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);

  const navigate = useNavigate();


  useEffect(() => {
    setLogin(isLoggedIn);
    setUser(getCurrentUserDetail());
  }, [login]);





  const logout = () => {
    doLogout(() => {
      setLogin(false);
      navigate("/");
    });
    
    
  };



  return (
    <div>
      <Navbar color="success" expand="md" fixed="" className="px-5">
        <NavbarBrand tag={ReactLink} to="/">
          MyBlogs
        </NavbarBrand>
        <NavbarToggler onClick={() => isSetOpen(!isOpen)} />

        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                New Feed
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/services">
                Services
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={ReactLink} to="/services">
                  Contactus
                </DropdownItem>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem>LinkedIn</DropdownItem>
                <DropdownItem>Youtube</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>



          <Nav navbar>
            {login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/profile-info">
                    Profile Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={logout}>Logout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashboard">
                    {user.email}
                  </NavLink>
                </NavItem>
              </>
            )}



            {!login && (
              <>
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
              </>
            )}

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
