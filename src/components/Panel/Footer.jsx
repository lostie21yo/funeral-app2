import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CustomModal } from "../Modal/CustomModal";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export const Footer = ({ modelList }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); showProductList(modelList); takeIFrameScreenshot("canvas") };


    const [productList, setProductList] = useState(new Set())

    const showProductList = (modelList) => {
        productList.clear()
        Object.values(modelList).map((product) => (
            (!product.includes('Не выбрано') && product.includes('.glb')) ? productList.add(product) : null
        ))
        setProductList(productList)
    };

    const takeIFrameScreenshot = (iframeId) => {

        // var canvas = document.getElementById("canvas");
        // var canvas = document.getElementById("canvas");

        // canvas.toBlob(function (blob) {
        //     var newImg = document.createElement("img"),
        //         url = URL.createObjectURL(blob);

        //     newImg.onload = function () {
        //         // больше не нужно читать blob, поэтому он отменён
        //         URL.revokeObjectURL(url);
        //     };

        //     newImg.src = url;
        //     document.body.appendChild(newImg);
        // });

        // var canvas = document.getElementById("canvas");
        // canvas.toBlob((blob) => {
        //     // saveAs(blob, "pretty image.jpg");
        // });


        // html2canvas(document.querySelector(`#${iframeId}`)).then(canvas => {
        //     document.body.appendChild(canvas)
        // });



        // const canvas = document.getElementById(iframeId);

        // const ctx = canvas.getContext('2d');
        // ctx.drawImage(canvas, 0, 0, canvas.width, canvas.height);

        // const screenshot = canvas.toDataURL();

        // return screenshot;
    }

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
                productList={productList} />
        </>
    );
};
