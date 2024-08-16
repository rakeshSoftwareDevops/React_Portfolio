import React from 'react'
import '../styles/header.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from 'react-scroll';
import "bootstrap/dist/css/bootstrap.min.css";


export default function Header() {
  return (
    <div className='header-container'>
       <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.42, 0, 0.58, 1]
          }}
          >
        <Navbar  collapseOnSelect expand="lg" bg="light" fixed="top" data-bs-theme="light">
          <Container>
            <Navbar.Brand href="#home" onClick={() => scroll.scrollToTop()} style={{ cursor: 'pointer' }}>
              Rakesh.y()
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                  <Nav.Link>
                    <Link
                    to="home_section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active-link"
                  >
                    HOME
                  </Link>
                  </Nav.Link> 
                  <Nav.Link>
                      <Link
                      to="myskills_section"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                      activeClass="active-link"
                    >
                     MY SKILLS
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                      <Link
                      to="experience_section"
                      spy={true}
                      smooth={true}
                      duration={500}
                      offset={-50}
                      activeClass="active-link"
                    >
                    EXPERIENCE
                    </Link>
                  </Nav.Link> 
                  <Nav.Link>
                    <Link
                    to="projects_section"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    activeClass="active-link"
                  >
                    PROJECTS
                    </Link>
                  </Nav.Link> 
                  <Nav.Link>
                      <Link
                      to="contact_section"
                      spy={true}
                      smooth={true}
                      duration={500}
                      activeClass="active-link"
                    >
                     CONTACT
                     </Link>
                  </Nav.Link> 
            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>
    </div>
  )
}
