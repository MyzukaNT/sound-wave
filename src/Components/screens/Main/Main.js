import React from "react";
import { Button, Container, Row } from 'react-bootstrap';
//import  girl  from './img/girl.png';

export const Main = () => (
    <>
        <Container>
        {/* <img src={girl} className="Main-girl" alt="girl" height={450}/> */}
            <Row>
                <h1>Fell the Music</h1>
                <h3>Stream over 20 thousand songs with one click</h3>
                <Button variant='primary'>Join Now</Button>
            </Row>
        </Container>
    </>
)