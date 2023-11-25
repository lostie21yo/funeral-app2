import { Modal } from 'react-bootstrap';
import { ClientForm } from './ClientForm';
import PRICES from "../../assets/prices.json";

export const CustomModal = ({ show, handleClose, productList, screenshot, FIOcount }) => {

    function formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear();

        return dd + '.' + mm + '.' + yy;
    }
    var date = formatDate(new Date());

    var total = 0;
    productList = Array.from(productList)
    productList = productList.map((product) => {
        product = product.split('/').at(-1)
        // productList[productList.indexOf(product)] = product
        if (Object.keys(PRICES).includes(product)) {
            total = total + PRICES[product];
        } else total = total + 0
        return product
    })

    const MakeName = (product) => {
        let features = []
        if (/_(\d)+_/.test(product)) {
            features.push(`размер ${product.match(/_(\d+)+_/)[1]}`);
        }
        if (/\((\d+)/.test(product)) {
            features.push(`высота ${product.match(/\((\d+)/)[1]} см`);
        }
        if (/([a-zA-Z]+)\)/.test(product)) {
            features.push(`цвет ${product.match(/([a-zA-Z]+)\)/)[1]}`);
        }
        let name = `${product.match(/^(.+) \[/i)[1]} ${features.length > 0
            ? '(' + features.map(elem => {
                return features.indexOf(elem) === 0 ? elem : ' ' + elem
            }) + ')'
            : ''}`
        return name.replace('\n', '')
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            style={{ "--bs-modal-width": "70%" }}
        >
            <Modal.Header closeButton >
                <Modal.Title>
                    <h4 style={{ margin: "0", display: 'flex', alignItems: 'center' }}>
                        Оформление заказа
                    </h4>
                    <h6>{date}</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ClientForm productList={productList} key={show} total={total} 
                    date={date} PRICES={PRICES} handleClose={handleClose} 
                    MakeName={MakeName} screenshot={screenshot} FIOcount={FIOcount}/>
            </Modal.Body>
        </Modal>
    );
}