import React from 'react'
import {Badge, Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.svg'
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Header = () => {
    const {cartItems} = useSelector((state)=>state.cart);

  return (
    <header>
        <Navbar className='navbar' expand='md' collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand className='logo'><img src={logo} width="34"/> Check<span>Out</span></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto nav'>
                        <LinkContainer to='/cart'>
                            <Nav.Link className='tab' id='cart'>
                                <FaShoppingCart/>Cart
                                {cartItems.length>0 && (
                                    <Badge pill bg='success' style={{marginLeft : '5px'}}
                                    >
                                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                                    </Badge>
                                )}
                                </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/login'>
                            <Nav.Link className='tab' id='sign-in'><FaUser className='icon'/>Sign In</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header