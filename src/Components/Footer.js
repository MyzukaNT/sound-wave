import React from "react";
import { Container, Nav } from 'react-bootstrap';




const Footer = () => (
    <Container fluid style={{ backgroundColor: '#202027', color: '#fff'}}>
        <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px'}}>
                    
                                <Nav.Link md='2'>About Us</Nav.Link>
                                <Nav.Link md='2'>Contact</Nav.Link>        
                           
            <p>Twitter</p>
            <p>Facebook</p>
        </Container>

    </Container>

)
export default Footer;

// const Footer = () => (
    
//         <Navbar fluid style={{ backgroundColor: '#202027', color: '#fff'}}>
//             <Container>
//                 <Container>
//                     <Navbar.About.Contact md='2'>
//                         <Nav className="mr-auto">
//                             <Nav.Link>About Us</Nav.Link>
//                             <Nav.Link>Contact</Nav.Link>        
//                         </Nav>
//                     </Navbar.About.Contact>
//                 </Container>

//                 <Container>
//                     <Navbar.Social>
//                         <Nav className="mr-auto">
//                             <Nav.Link>Twitter</Nav.Link>
//                             <Nav.Link>Facebook</Nav.Link>        
//                         </Nav>

//                     </Navbar.Social>
//                 </Container>
//             </Container>
//         </Navbar>
    
    
//     )
//     export default Footer;