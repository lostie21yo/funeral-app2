import React from "react";
import { Container, Button } from "react-bootstrap";


export const Footer = () => {

    return (
        <Container fluid style={{ backgroundColor: '#212529', color: 'white' }}>
            <Container fluid style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <Button variant="success" className="footer-button">Оформить заказ</Button>
            </Container>
        </Container>
    );
};
