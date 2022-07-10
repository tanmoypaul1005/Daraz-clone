import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaMailBulk } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSearch ,FaCartArrowDown} from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import './Navbar.css';
import { FaTwitter } from "react-icons/fa";


const NavBars = () => {

  const logout = () => {
    localStorage.removeItem('student');
  }



  return (
    <div>
      <Navbar className="Navbar1" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav  className="me-auto">
              <Nav.Link className="navbarelement" href="/"> SAVE MORE ON APP</Nav.Link>
              <Nav.Link className="navbarelement" href="/about"> SELL ON DARAZ</Nav.Link>
              <Nav.Link className="navbarelement" href="/about"> CUSTOMER CARE</Nav.Link>
              <Nav.Link className="navbarelement" href="/about"> TRACK MY ORDER</Nav.Link>
              <Nav.Link className="navbarelement" href="/about">SIGNUP / LOGIN</Nav.Link>
              <Nav.Link className="navbarelement" href="/about"> DARAZ AFFILIATE PROGRAM</Nav.Link>
              <Nav.Link className="navbarelement" href="/about"> ভাষা</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      


      
    <Navbar className="Navbar2" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"> <img style={{ width: "135px",height:"41px" }} src="https://icms-image.slatic.net/images/ims-web/bfe8de2c-b737-42ab-b1f1-576042ab0412.png" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse style={{ backgroundColor: 'white', padding: '0.8rem' }} id="responsive-navbar-nav">
          <Nav>
          <Form className="d-flex">
        <FormControl
        style={{width:'39rem',height:'45px'}}
          type="search"
          placeholder="Search in Daraz"
          className="me-2"
          aria-label="Search"
        />
        <Button style={{height:'45px'}} variant="outline-success"> <FaSearch/></Button>
      </Form>
            <Nav.Link className="navbar" href="/singup"><IoCartOutline className='shopcart'/></Nav.Link>
            <Nav.Link className="navbar" href="/singup"><img style={{marginLeft:'1rem',width: "188px",height: "45px",display: "block"}} src="https://icms-image.slatic.net/images/ims-web/e6fd2baf-e763-44e8-9c7a-6cb0da66a49f.png"></img></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div >
  );
};

export default NavBars;