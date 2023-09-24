import React from "react";
import "./forms.css";
import { Formik, Form, Field } from "formik";
import { ListOfProducts } from "./ListOfProducts";
import { Button } from 'react-bootstrap';

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

function validateNumber(value) {
    let error;
    if (!value) {
        error = "Обязательное поле";
    } else if (!/^(\+7|8)?(\d{10})$/.test(value)) {
        error = "Неверный формат";
    }
    return error;
}

function validateEmail(value) {
    let error;
    if (!value) {
        error = "Обязательное поле";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        error = "Неверный почтовый адрес";
    }
    return error;
}

function validateName(value) {
    let error;
    if (!value) {
        error = "Обязательное поле"
    } else if (!/^([a-zа-яё]+)$/i.test(value)) {
        error = "Недопустимый формат";
    }
    return error;
}

function validateDate(value) {
    let error;
    if (!value) {
        error = "Обязательное поле"
    } else if (!/^[0-9]{1,2}.[0-9]{1,2}.[0-9]{4}$/i.test(value)) {
        error = "Недопустимый формат";
    }
    return error;
}


export const ClientForm = ({ productList, productListNames, date, total, handleClose, PRICES, MakeName }) => {
    
    const PDFobject = productList.map(product => [{ text : MakeName(product) }])

    var pdfdoc = {
        info: {
            title: 'Тестовый PDF',
            author: 'admin',
            subject: 'order',
            keywords: 'some key words'
        },
        pageSize: 'A4',
        pageOrientation: 'portrait',
        pageMargins: [20, 20, 20, 20],
        fontSize: 14,
        header: function (currentPage, pageCount) {
            return {
                text: currentPage.toString() + '/' + pageCount.toString(),
                alignment: 'right',
                margin: [0, 30, 10, 50]
            }
        },
        content: [
            PDFobject
        ],
        footer: [
            {
                text: total,
                alignment: 'center',
            }
        ]
    }

    const createPDF = () => {
        const pdfGenerator = pdfMake.createPdf(pdfdoc, null, null, pdfFonts.pdfMake.vfs).open();
        // pdfMake.createPdf(pdfdoc).download('name.pdf');
    }

    return (
        <div>
            <Formik
                initialValues={{
                    order_date: date,
                    customer_secondname: "Very",
                    customer_firstname: "Good",
                    customer_surname: "Relative",
                    email: "immortal@gmail.com",
                    number: "+79998887766",
                    monument_secondname: "Everybody",
                    monument_firstname: "Stay",
                    monument_surname: "Alive",
                    birth_date: "04.04.2000",
                    death_date: "05.05.2500",
                    comment: "there is nothing to comment"
                }}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                    // alert('Данные успешно сохранены!')
                }}
            >

                {({ errors, touched, isValidating }) => (
                    <Form>
                        <h5 style={{ textAlign: 'center' }}>Данные заказчика</h5>

                        <span className="form-label">ФИО заказчика</span>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="customer_secondname" holder="Фамилия" validate={validateName} autoFocus />
                                {errors.customer_secondname && touched.customer_secondname
                                    && <div className="field-error">{errors.customer_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="customer_firstname" holder="Имя" validate={validateName} />
                                {errors.customer_firstname && touched.customer_firstname
                                    && <div className="field-error">{errors.customer_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="customer_surname" holder="Отчество" validate={validateName} />
                                {errors.customer_surname && touched.customer_surname
                                    && <div className="field-error">{errors.customer_surname}</div>}
                            </div>
                        </div>

                        <div className="field-line" style={{ margin: "0 0 20px 0" }}>
                            <div style={{ width: "40%" }}>
                                <span className="form-label">Контактный телефон</span>
                                <Field className="form-field form-input" name="number" autoComplete="off"
                                    holder="Телефон" validate={validateNumber} />
                                {errors.number && touched.number && <div className="field-error">{errors.number}</div>}
                            </div>
                            <div style={{ width: "58%" }}>
                                <span className="form-label">Электронная почта</span>
                                <Field className="form-field form-input" name="email" autoComplete="off"
                                    holder="@" validate={validateEmail} />
                                {errors.email && touched.email && <div className="field-error">{errors.email}</div>}
                            </div>
                        </div>

                        <span className="form-label">ФИО на памятнике</span>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_secondname" holder="Фамилия" validate={validateName} />
                                {errors.monument_secondname && touched.monument_secondname
                                    && <div className="field-error">{errors.monument_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_firstname" holder="Имя" validate={validateName} />
                                {errors.monument_firstname && touched.monument_firstname
                                    && <div className="field-error">{errors.monument_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_surname" holder="Отчество" validate={validateName} />
                                {errors.monument_surname && touched.monument_surname
                                    && <div className="field-error">{errors.monument_surname}</div>}
                            </div>
                        </div>

                        <div style={{ display: "flex", margin: "0 0 20px 0" }}>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <span className="form-label">Дата рождения</span>
                                <Field className="form-field form-input" name="birth_date" autoComplete="off"
                                    holder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.birth_date && touched.birth_date && <div className="field-error">{errors.birth_date}</div>}
                            </div>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <span className="form-label">Дата смерти</span>
                                <Field className="form-field form-input" name="death_date" autoComplete="off"
                                    holder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.death_date && touched.death_date && <div className="field-error">{errors.death_date}</div>}
                            </div>
                        </div>

                        <div style={{}}>
                            <span className="form-label">Комментарий к заказу</span>
                            <div className="input-group" >
                                <Field className="form-field form-input" name="comment"
                                    component="textarea" rows="2"></Field>
                                {/* <textarea className="form-input" name="comment" aria-label="comment"></textarea> */}
                            </div>
                        </div>

                        <h5 style={{ textAlign: 'center', margin: '16px 0 8px 0' }}>Детали заказа</h5>
                        <div style={{ borderRadius: '4px', border: '1px solid #5c5c5c' }}>
                            <span className="form-label">Выбранные позиции:</span>
                            <div className="order-details">
                                <ListOfProducts productList={productList} PRICES={PRICES} MakeName={MakeName}/>
                                {total !== 0 &&
                                    <div className="total">
                                        <span style={{ margin: "0 5px" }}>Итого, руб:</span> <span className="price">{total}</span>
                                    </div>}
                            </div>
                            <div>
                                <img className="order-photo" src="/rip.jpg" alt="order-screenshot" />
                            </div>
                        </div>

                        <hr style={{ width: "100%" }} />

                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <Button variant="secondary" style={{ margin: "0 5px" }} onClick={handleClose}>
                                Отмена
                            </Button>
                            <Button variant="primary" style={{ margin: "0 5px" }} type="submit" onClick={createPDF}>
                                Подтвердить
                            </Button>
                        </div>
                    </Form >
                )}
            </Formik >
        </div >
    )
};