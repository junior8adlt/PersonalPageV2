import React, {useState} from 'react';

import { greetings, socialLinks } from "../../data/data";

import './Navigation.css'
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FaFacebookSquare, FaGithub, FaLinkedin, FaBars } from "react-icons/fa";

const Navigation = () => {
    const [collapseClasses, setCollapseClasses] = useState("");
    const [active, setActive] = useState(false)
    const onExiting = () => setCollapseClasses("collapsing-out");
    
    const onExited = () => setCollapseClasses("");
    const changeActive = () =>{
      if (window.scrollY >= 80) {
        setActive(true)
      }else{
        setActive(false)
      }
    }

    window.addEventListener('scroll', changeActive);
    return ( 
        <>
        <header className="header-global">
          <Navbar
            className={`navbar-main navbar-light ${active ? 'navbar-active' : 'navbar-transparent '}`}
            expand="lg"
            id="navbar-main"
            fixed="top"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" >
                <h2 className="text-white" id="nav-title">{greetings.name}</h2>
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <FaBars color='white'/>
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={collapseClasses}
                onExiting={onExiting}
                onExited={onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                        <h3 className="text-black" id="nav-title">{greetings.name}</h3>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.facebook}
                      target="_blank"
                    >
                      <FaFacebookSquare/>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.github}
                      target="_blank"
                    >
                      <FaGithub/>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href={socialLinks.linkedin}
                      target="_blank"
                    >
                    <FaLinkedin/>
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
     );
}
 
export default Navigation;