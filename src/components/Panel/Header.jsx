import React from "react";
import { Navbar, Container } from "react-bootstrap";

export const Header = () => {

    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark" style={{ backgroundColor: "#1c2128" }}>
            <Container>
                <Navbar.Brand  >
                    <img
                        alt=""
                        src="/rose-logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top me-2"
                    />
                    Ритуал журнал
                </Navbar.Brand>
                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                {/* <Navbar.Collapse id="basic-navbar-nav"> */}
                {/* <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                        </Nav> */}
                {/* </Navbar.Collapse> */}
            </Container>
        </Navbar>
    );
};
