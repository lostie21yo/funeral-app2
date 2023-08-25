import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalWindow(props) {
  return (
    <Modal
      {...props}
      // size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Оформление заказа
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5 style={{textAlign: 'center'}}>Информация заказчика</h5>
        <div style={{ padding: "0px 5px" }}>
          <label for="basic-url" style={{ margin: "2px 5px" }}>ФИО заказчика</label>
          <div className="input-group mb-3" style={{ width: "100%" }}>
            <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          </div>
        </div>

        <div style={{ display: 'flex' }}>

          <div style={{ display: 'flex', flexDirection: 'column', width: "50%", padding: "0px 5px" }}>
            <label for="basic-url" style={{ margin: "2px 5px" }}>Контактный телефон</label>
            <div className="input-group mb-3" style={{ width: "100%" }}>
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', width: "50%", padding: "0px 5px" }}>
            <label for="basic-url" style={{ margin: "2px 5px" }}>Электронная почта</label>
            <div className="input-group mb-3" style={{ width: "100%" }}>
              <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
          </div>


        </div>

        <div style={{ padding: "0px 5px" }}>
          <label for="basic-url" style={{ margin: "2px 5px" }}>ФИО на памятнике</label>
          <div className="input-group mb-3" style={{ width: "100%" }}>
            <input type="text" className="form-control" placeholder="" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          </div>
        </div>

        <div style={{ padding: "0px 5px" }}>
          <div className="input-group mb-3" style={{ width: "70%" }}>
            <input type="text" className="form-control" placeholder="Дата рождения" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <input type="text" className="form-control" placeholder="Дата смерти" aria-label="Recipient's username" aria-describedby="basic-addon2" />
          </div>
        </div>

        <div style={{ padding: "0px 5px" }}>
          <label for="basic-url" style={{ margin: "2px 5px" }}>Комментарии</label>
          <div className="input-group">
            <textarea className="form-control" aria-label="With textarea"></textarea>
          </div>
        </div>

        <hr />
        <h5 style={{textAlign: 'center'}}>Детали заказа</h5>
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
