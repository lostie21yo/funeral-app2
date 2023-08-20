import React from "react";
import { Container, Button } from "react-bootstrap";
import ModalWindow from "../Modal/ModalWindow";


export const Footer = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Container fluid style={{ backgroundColor: 'rgb(43,48,53)', color: 'white' }}>
                <Container fluid style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <Button variant="success" className="footer-button" onClick={() => setModalShow(true)}>Оформить заказ</Button>
                </Container>
            </Container>
            <ModalWindow
                show={modalShow}
                onHide={() => setModalShow(false)}/>
        </>
    );
};
