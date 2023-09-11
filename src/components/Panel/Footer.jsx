import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CustomModal } from "../Modal/CustomModal";


export const Footer = ({ modelList }) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true); showProductList(modelList)};

    var productList = new Set()

    const showProductList = (modelList) => {
        productList.clear()
        Object.values(modelList).map((product) => (
            (!product.includes('Не выбрано') && product.includes('.glb')) ? productList.add(product) : null
        ))
        console.log(productList)
      };

    return (
        <>
            <Container fluid style={{ backgroundColor: 'rgb(43,48,53)', color: 'white' }}>
                <Container fluid style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <Button variant="success" className="footer-button" onClick={handleShow}>
                    Оформить заказ
                    </Button>
                </Container>
            </Container>
            <CustomModal
                show={show}
                handleClose={handleClose}
                productList={productList}/>
        </>
    );
};
