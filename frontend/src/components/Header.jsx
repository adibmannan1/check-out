import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header>
        <Navbar className='navbar' expand='md' collapseOnSelect>
            <Container>
                <Navbar.Brand className='logo' href='/'><img src={logo} width="35"/> CheckOut</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto nav'>
                        <Nav.Link href='/cart' className='tab'><FaShoppingCart/>Cart</Nav.Link>
                        <Nav.Link href='/login' className='tab' id='sign-in'><FaUser/>Sign In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header