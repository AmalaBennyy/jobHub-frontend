

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

function Header() {
  const location = useLocation();

  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';
  const buttonText = isHomePage ? 'Login' : 'Logout';
  
  const handleLogout = () => {
    // Clear token from session storage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("existingCompany")

    // Navigate to the home page
    navigate('/');
  };


  return (
    <Navbar expand="lg" className="" style={{ backgroundColor: '#367588' }}>
      <Container fluid>
        <Navbar.Brand href="/" style={{ color: 'white', fontSize: '20px' }} className='ms-5'>
          
          JobHub.com
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            {/* Add any additional Nav.Link elements if needed */}
          </Nav>

          {isHomePage ? (
            <Dropdown>
              <Dropdown.Toggle variant="" id="dropdown-basic" className='text-light me-5'>
                {buttonText}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="" >
                  <Link to={'/admin'} style={{textDecoration:'none'}}> Admin</Link>
                 </Dropdown.Item>
                <Dropdown.Item href=""> <Link to={'/companyLogin'} style={{textDecoration:'none'}}> Company</Link></Dropdown.Item>
                <Dropdown.Item href=""> <Link to={'/candLogin'} style={{textDecoration:'none'}}> Candidate</Link></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <button className=' btn' onClick={handleLogout}>
              <i className="fa-solid fa-power-off" style={{color:'white'}} ></i>
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
