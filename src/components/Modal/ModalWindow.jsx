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
        <label for="basic-url">ФИО заказчика</label>
        <div class="input-group mb-3" style={{ width: "50%" }}>
          <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <label for="basic-url">Контактный телефон</label>
        <div class="input-group mb-3" style={{ width: "50%" }}>
          <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <label for="basic-url">Электронная почта</label>
        <div class="input-group mb-3" style={{ width: "50%" }}>
          <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <label for="basic-url">ФИО на памятнике</label>
        <div class="input-group mb-3" style={{ width: "50%" }}>
          <input type="text" class="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>

        <div class="input-group mb-3" style={{ width: "50%" }}>
          <input type="text" class="form-control" placeholder="Дата рождения" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <input type="text" class="form-control" placeholder="Дата смерти" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <label for="basic-url">Комментарии</label>
        <div class="input-group">
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

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
