import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalWindow(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Оформление заказа
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Персональная информация</h4>
        <p>
          Здесь будет размещена форма получения информации о клиенте (ФИО, телефон, почта и т.д.)
        </p>
        <h4>Детали заказа</h4>
        <p>
          Здесь будет размещена информация о заказе (перечень покупаемой продукции, её стоимость, размер предоплаты и т.д.)
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalWindow;
