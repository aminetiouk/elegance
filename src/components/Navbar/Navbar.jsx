import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './NavbarStyle.css';
import { Link } from 'react-router-dom';


const NavBarSection = () => {
  const [expand, setExpand] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 100) {
      setIsFixed(true);
    } else if (window.scrollY <= 50) {
      setIsFixed(false);
    }
  }
  window.addEventListener('scroll', scrollHandler);

  return (
    <Navbar
      fixed='top'
      expand='md'
      className={isFixed ? 'nav fixed' : 'navbar'}
    >
      <Container className='nav-cont'>
        <Link to='/' className='navbar-brand'>
          <h1 className='logo'>EleganceHub</h1>
        </Link>
        <div className='d-flex'>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            onClick={() => {
              setExpand(expand ? false : 'expanded');
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>
        </div>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='justify-content-end flex-grow-1 pe-3'>
            <Nav.Item>
              <Link
                aria-label='Home Page'
                className='navbar-link'
                to='/'
                onClick={() => setExpand(false)}
              >
                <span className='nav-link-label'>Home</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label='Shop Page'
                className='navbar-link'
                to='/shop'
                onClick={() => setExpand(false)}
              >
                <span className='nav-link-label'>Shop</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label='Cart Page'
                className='navbar-link'
                to='/cart'
                onClick={() => setExpand(false)}
              >
                <span className='nav-link-label'>Cart</span>
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link
                aria-label='Login Page'
                className='navbar-link'
                to='/login'
              >
                <span className='nav-link-label'>login</span>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarSection;
