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

function validateOrderNumber(value) {
    let error;
    if (!value) {
        error = "Обязательное поле";
    } else if (!/^(\d{1,6})$/.test(value)) {
        error = "Неверный формат";
    }
    return error;
}

export const ClientForm = ({ productList, date, total, handleClose, PRICES, MakeName, screenshot }) => {

    const createPDF = (values) => {

        const FIO = `${values['customer_secondname']} ${values['customer_firstname'][0]}. ${values['customer_surname'][0]}.`

        const pdfName = `Заказ ${values['order_number']} ${FIO} от ${values['order_date']}`

        var isScreenshoted;
        screenshot === "noscreen" ? isScreenshoted = false : isScreenshoted = true

        var pdfdoc = {
            info: {
                title: pdfName,
                author: 'funeral-app',
                subject: 'order',
                keywords: 'some key words'
            },
            pageSize: 'A4',
            pageOrientation: 'portrait',
            pageMargins: [40, 40, 40, 40],
            fontSize: 10,
            header: { text: 'Ритуал журнал', alignment: 'center', margin: [0, 16, 0, 8] },
            content: [
                {
                    text: pdfName,
                    style: 'header',
                    alignment: 'center',
                    fontSize: 16
                },
                '\n',
                { text: 'Данные заказчика', fontSize: 14, bold: true, margin: [20, 0, 0, 4] },
                {
                    style: 'tableExample',
                    table: {
                        widths: [150, 330],
                        body: [
                            ['Дата заказа', values['order_date']],
                            ['', ''],
                            ['ФИО заказчика', values['customer_secondname'] + ' '
                                + values['customer_firstname'] + ' '
                                + values['customer_surname']],
                            ['Электронная почта', values['email']],
                            ['Контактный телефон', values['number']],
                            ['', ''],
                            ['ФИО на памятнике', values['monument_secondname'] + ' '
                                + values['monument_firstname'] + ' '
                                + values['monument_surname']],
                            ['Дата рождения', values['birth_date']],
                            ['Дата смерти', values['death_date']],
                            ['', ''],
                            ['Комментарий', values['comment']]
                        ],
                    },
                    layout: 'noBorders'
                },

                { text: 'Детали заказа', fontSize: 14, bold: true, margin: [20, 0, 0, 4] },
                {
                    style: 'tableExample',
                    table: {
                        widths: [400, 80],
                        body:
                            productList.map(product => [
                                `${MakeName(product)}`,
                                Object.keys(PRICES).includes(product) ? PRICES[product] : 'N/A'
                            ]),
                    },
                    layout: {
                        hLineWidth: function (i, node) {
                            return 1;
                        },
                        vLineWidth: function (i, node) {
                            return 1;
                        },
                        hLineColor: function (i, node) {
                            return (i === 0 || i === node.table.body.length) ? 'black' : 'gray';
                        },
                        vLineColor: function (i, node) {
                            return (i === 0 || i === node.table.widths.length) ? 'black' : 'gray';
                        },
                    }
                },
                {
                    text: `Итоговая стоимость продукции: ${total} руб.`,
                    fontSize: 12, margin: [0, 0, 0, 20], color: 'black'
                },
                isScreenshoted
                    ? { image: screenshot, fit: [400, 300], alignment: 'center' }
                    : { }

            ],
            function() {
                console.log(screenshot)
                if (screenshot !== "noscreen") {
                    return {
                        image: screenshot,
                        fit: [400, 300],
                        alignment: 'center'
                    }
                }
            },


            // footer: function () {
            //     if (screenshot !== "empty screen base64") {
            //         return {
            //             image: screenshot,
            //             fit: [400, 300],
            //             alignment: 'center'
            //         }
            //     }
            // },

            styles: {
                header: {
                    fontSize: 20,
                    bold: true,
                    alignment: 'justify'
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
            },
        }

        pdfMake.createPdf(pdfdoc, null, null, pdfFonts.pdfMake.vfs).download(pdfName + '.pdf');
        // pdfMake.createPdf(pdfdoc, pdfFonts.pdfMake.vfs).open();
    }

    return (
        <div>
            <Formik
                initialValues={{
                    order_date: date,
                    customer_secondname: "",
                    customer_firstname: "",
                    customer_surname: "",
                    email: "",
                    number: "",
                    monument_secondname: "",
                    monument_firstname: "",
                    monument_surname: "",
                    birth_date: "",
                    death_date: "",
                    comment: "",
                    order_number: ""
                }}
                onSubmit={(values) => {
                    // same shape as initial values
                    // console.log(values);
                    if (productList.length > 0) createPDF(values)
                    else alert("Оформление заказа невозможно.\nНи одна позиция не была выбрана!")
                }}
            >

                {({ errors, touched, isValidating }) => (
                    <Form>
                        <h5 style={{ textAlign: 'center' }}>Данные заказчика</h5>

                        <span className="form-label">ФИО заказчика</span>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="customer_secondname" placeholder="Фамилия" validate={validateName} autoFocus />
                                {errors.customer_secondname && touched.customer_secondname
                                    && <div className="field-error">{errors.customer_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="customer_firstname" placeholder="Имя" validate={validateName} />
                                {errors.customer_firstname && touched.customer_firstname
                                    && <div className="field-error">{errors.customer_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="customer_surname" placeholder="Отчество" validate={validateName} />
                                {errors.customer_surname && touched.customer_surname
                                    && <div className="field-error">{errors.customer_surname}</div>}
                            </div>
                        </div>

                        <div className="field-line" style={{ margin: "0 0 20px 0" }}>
                            <div style={{ width: "40%" }}>
                                <span className="form-label">Контактный телефон</span>
                                <Field className="form-field form-input" name="number" autoComplete="off"
                                    placeholder="Телефон" validate={validateNumber} />
                                {errors.number && touched.number && <div className="field-error">{errors.number}</div>}
                            </div>
                            <div style={{ width: "58%" }}>
                                <span className="form-label">Электронная почта</span>
                                <Field className="form-field form-input" name="email" autoComplete="off"
                                    placeholder="@" validate={validateEmail} />
                                {errors.email && touched.email && <div className="field-error">{errors.email}</div>}
                            </div>
                        </div>

                        <span className="form-label">ФИО на памятнике</span>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_secondname" placeholder="Фамилия" validate={validateName} />
                                {errors.monument_secondname && touched.monument_secondname
                                    && <div className="field-error">{errors.monument_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_firstname" placeholder="Имя" validate={validateName} />
                                {errors.monument_firstname && touched.monument_firstname
                                    && <div className="field-error">{errors.monument_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_surname" placeholder="Отчество" validate={validateName} />
                                {errors.monument_surname && touched.monument_surname
                                    && <div className="field-error">{errors.monument_surname}</div>}
                            </div>
                        </div>

                        <div style={{ display: "flex", margin: "0 0 20px 0" }}>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <span className="form-label">Дата рождения</span>
                                <Field className="form-field form-input" name="birth_date" autoComplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.birth_date && touched.birth_date && <div className="field-error">{errors.birth_date}</div>}
                            </div>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <span className="form-label">Дата смерти</span>
                                <Field className="form-field form-input" name="death_date" autoComplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.death_date && touched.death_date && <div className="field-error">{errors.death_date}</div>}
                            </div>
                        </div>

                        <div style={{}}>
                            <span className="form-label">Комментарий к заказу</span>
                            <div className="input-group" >
                                <Field className="form-field form-input" name="comment"
                                    component="textarea" rows="2"></Field>
                            </div>
                        </div>

                        <div style={{ display: "flex", width: '100%', flexDirection: "column", alignItems: "center" }}>
                            <div style={{
                                display: "flex", width: '100%', justifyContent: "center",
                                alignItems: "center", margin: '16px 0 8px 0', fontSize: "20px"
                            }}>
                                <h5 style={{ textAlign: 'center', margin: "0" }}>
                                    Детали заказа №
                                </h5>
                                <div style={{ width: "65px", margin: "0 2% 0 0", display: "flex" }}>
                                    <Field style={{ padding: "0px 2px", fontSize: "18px" }}
                                        className="form-field form-input" name="order_number" autoComplete="off"
                                        placeholder="000000" validate={validateOrderNumber} />
                                </div>
                            </div>
                            {errors.order_number && touched.order_number && <div className="field-error">{errors.order_number}</div>}
                        </div>

                        <div style={{ margin: "8px 0", borderRadius: '4px', border: '1px solid #5c5c5c' }}>
                            <span className="form-label">Выбранные позиции:</span>
                            <div className="order-details">
                                <ListOfProducts productList={productList} PRICES={PRICES} MakeName={MakeName} />
                                {total !== 0 &&
                                    <div className="total">
                                        <span style={{ margin: "0 5px" }}>Итого, руб:</span> <span className="price">{total}</span>
                                    </div>}
                            </div>
                            <div>
                                {screenshot === 'noscreen'
                                    ? <span className="form-label" style={{ color: "orange" }}>Снимок сцены не сделан!</span>
                                    : <img className="order-photo" src={`${screenshot}`} alt="order-screenshot" />}

                            </div>
                        </div>

                        <hr style={{ width: "100%" }} />

                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <Button variant="secondary" style={{ margin: "0 5px" }} onClick={handleClose}>
                                Отмена
                            </Button>
                            <Button variant="primary" style={{ margin: "0 5px" }} type="submit">
                                Подтвердить
                            </Button>
                        </div>
                    </Form >
                )}
            </Formik >
        </div >
    )
};