import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default function NaviBar() {

    return (
        <>
        <Navbar collapseOnSelect expend="lg" bg="dark" variant="dark">
            <Navbar.Brand>Soundwave</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/discover">Discover</Link></Nav.Link>
                    <Nav.Link><Link to="/join">Join</Link></Nav.Link>
        
                </Nav>

            </Navbar.Collapse>

        </Navbar>
    
        </>
    )
}