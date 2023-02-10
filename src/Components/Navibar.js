import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  logo  from './img/logo.png';


export default function NaviBar() {

    return (
        <>
        <Navbar collapseOnSelect expend="lg" bg="dark" variant="dark" className='my-2'>
            <Navbar.Brand md='2'>
                <img src={logo} className="App-logo" alt="logo" height={45}/>
                <Link to="/">Soundwave</Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='responsive-navbar-nav' />

            <Navbar.Collapse id="responsive-navbar-nav" md='10' className='d-flex justify-content-end'>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/discover">Discover</Link></Nav.Link>
                    <Nav.Link><Link to="/join">Join</Link></Nav.Link>        
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    
        </>
    )
}