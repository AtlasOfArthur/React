import React from "react";

import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function ReactViteBootstrap() {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4}>   
                    <Image src={reactLogo} className="logo react" alt="React logo" />   
                </Col>
                <Col xs={6} md={4}>
                    <Image src={viteLogo} className="logo" alt="Vite logo" />
                </Col>
            </Row>
            <h1>ReactVite + Bootstrap</h1>
        </Container>
    );
}

export default ReactViteBootstrap;