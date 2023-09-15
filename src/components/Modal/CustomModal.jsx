import { Button, Modal } from 'react-bootstrap';
import { ClientForm } from './ClientForm';

export const CustomModal = ({ show, handleClose, productList }) => {

    function formatDate(date) {

        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;

        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;

        var yy = date.getFullYear();

        return dd + '.' + mm + '.' + yy;
    }
    var date = formatDate(new Date());
    

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size='xl'
        >
            <Modal.Header closeButton >
                <Modal.Title><h4 style={{ margin: "0" }}>Оформление заказа</h4> <h6>{date}</h6></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ClientForm productList={productList} key={show} date={date}/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                </Button>
                <Button variant="primary">Подтвердить</Button>
            </Modal.Footer>
        </Modal>
    );
}