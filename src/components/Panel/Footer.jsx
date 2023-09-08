import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CustomModal } from "../Modal/CustomModal";


export const Footer = ({ modelList }) => {

    // const [modalShow, setModalShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {setShow(true); showProductList(modelList)};

    const [productList, setProductList] = useState(new Set())

    const showProductList = (modelList) => {

        Object.values(modelList).map((product) => (
            !product.includes('Не выбрано') ? productList.add(product) : null
        ))
        var isEmpty = true;
        if (productList.length > 0) {
            isEmpty = false;
        }
        console.log(productList)
        
        setProductList(productList);
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
