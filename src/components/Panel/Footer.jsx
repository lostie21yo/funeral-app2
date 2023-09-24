import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CustomModal } from "../Modal/CustomModal";
import * as THREE from 'three';
// import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

export const Footer = ({ modelList }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => { setShow(true); showProductList(modelList); takeIFrameScreenshot("canvas") };

    const saveBlob = (function () {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        return function saveData(blob, fileName) {
            const url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = fileName;
            a.click();
        };
    }());

    const [productList, setProductList] = useState(new Set())

    const showProductList = (modelList) => {
        productList.clear()
        Object.values(modelList).map((product) => (
            (!product.includes('Не выбрано') && product.includes('.glb')) ? productList.add(product) : null
        ))
        setProductList(productList)
    };

    const takeIFrameScreenshot = (elementName) => {

        var canvas = document.getElementsByTagName(elementName)[0];

        const renderer = new THREE.WebGLRenderer({
            canvas,
            preserveDrawingBuffer: true,
            alpha: true,
        })

        // render()
        // canvas.toBlob((blob) => {
        //     saveBlob(blob, `screencapture-${canvas.width}x${canvas.height}.png`);
        // });

        // canvas.toBlob((blob) => {
        //     saveAs(blob, "pretty image.jpg");
        // });




        // var ctx = canvas.getContext('2d');
        // console.log(ctx)
        // ctx.drawWindow(...);


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

        


        // html2canvas(document.querySelector(`#${iframeId}`)).then(canvas => {
        //     document.body.appendChild(canvas)
        // });



        // const canvas = document.getElementById(iframeId);

        // const ctx = canvas.('2d');
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
