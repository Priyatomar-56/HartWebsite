import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styled from 'styled-components';
//import Image from 'next/image';
//import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <>
      <Navbar key={'md'} bg="rgb(1, 1, 1)" expand={'md'} className="mb-3 text-white" fixed="top">
        <Container fluid>
          <Navbar.Brand href="/" className='ms-5'>
            <NavBrandDiv>
              <img src="/Hart_logo.png" width={60} height={60} alt="logo" />
              <span > Hart</span>
            </NavBrandDiv>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md text-white`}>
                Hart
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <NavDropdown
                  title="Our Product"
                  id={`offcanvasNavbarDropdown-expand-md`}
                  className='ms-5'
                >
                  <NavDropdown.Item href={`patients`}>For You</NavDropdown.Item>
                  <NavDropdown.Item href={`doctors`}> For Doctors </NavDropdown.Item>
                  <NavDropdown.Item href={`hospitals`}>For Enterprises and Hospitals <span style={{ fontSize: '9px', backgroundColor: 'orange', padding: '5px', borderRadius: '50%', fontWeight: 700 }}>coming soon</span></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  title="About"
                  id={`offcanvasNavbarDropdown-expand-md`}
                  className='ms-5'
                >
                  <NavDropdown.Item href="about-us" >About us</NavDropdown.Item>
                  <NavDropdown.Item href="about-team">About Team</NavDropdown.Item>
                  <NavDropdown.Item href="our-mission">Our Mission</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="blogs" className='ms-5'>
                  <NavLinkDiv>
                    <span>Blogs </span>
                    <span style={{ fontSize: '9px', backgroundColor: 'orange', padding: '5px', borderRadius: '50%', fontWeight: 700 }}>coming soon</span>
                  </NavLinkDiv>
                </Nav.Link>
                <Nav.Link href="abdm" className='ms-5'>
                  <NavLinkDiv>
                    <span>ABDM</span>
                    <span style={{ fontSize: '9px', backgroundColor: 'orange', padding: '5px', borderRadius: '50%', fontWeight: 700 }}>coming soon</span>
                  </NavLinkDiv>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  );
}


export default Header

const NavBrandDiv = styled.div`
  display: flex;
  span{
    color: white;
    font-weight: 700;
    font-size: 30px;
    margin-top: 5px;
  }
`

const NavLinkDiv = styled.div`
  display: flex;
`