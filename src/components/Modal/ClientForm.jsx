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

// function validateEmail(value) {
//     let error;
//     if (!value) {
//         error = "Обязательное поле";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
//         error = "Неверный почтовый адрес";
//     }
//     return error;
// }

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

export const ClientForm = ({ productList, date, total, handleClose, PRICES, MakeName, screenshot, FIOcount }) => {

    var initial = {
        order_date: date,
        customer_secondname: "Заказчик",
        customer_firstname: "Прекрасной",
        customer_surname: "Могилы",
        // email: "",
        number: "+79998887766",
        monument_secondname1: "Первый",
        monument_firstname1: "Покинувший",
        monument_surname1: "Мир",
        birth_date1: "0.0.0000",
        death_date1: "31.12.3000",
        comment: "Однажды и нас настигнет эта участь",
        order_number: "123456",
        deadline: "12.05.2023"
    }
    if (FIOcount === "2") {
        initial['monument_secondname2'] = ""
        initial['monument_firstname2'] = ""
        initial['monument_surname2'] = ""
        initial['birth_date2'] = ""
        initial['death_date2'] = ""
    }
    // console.log(initial)

    const createPDF = (values) => {

        const FIO = `${values['customer_secondname']} ${values['customer_firstname'][0]}. ${values['customer_surname'][0]}.`

        const pdfName = `Заказ ${values['order_number']} ${FIO} от ${values['order_date']}`

        var isScreenshoted;
        screenshot === "noscreen" ? isScreenshoted = false : isScreenshoted = true

        var data = [
            ['Дата заказа', values['order_date']],
            ['', ''],
            ['ФИО заказчика', values['customer_secondname'] + ' '
                + values['customer_firstname'] + ' '
                + values['customer_surname']],
            // ['Электронная почта', values['email']],
            ['Контактный телефон', values['number']],
            ['', ''],
            ['ФИО на памятнике 1', values['monument_secondname1'] + ' '
                + values['monument_firstname1'] + ' '
                + values['monument_surname1']],
            ['Дата рождения', values['birth_date1']],
            ['Дата смерти', values['death_date1']],
            ['', '']
        ]
        const fullname2 = values['monument_secondname2'] + ' '
            + values['monument_firstname2'] + ' ' + values['monument_surname2']
        if (FIOcount === "2" && fullname2 !== "  ") {
            data.push(['ФИО на памятнике 2', fullname2])
            data.push(['Дата рождения', values['birth_date2']])
            data.push(['Дата смерти', values['death_date2']])
        }
        data.push(['', ''])
        data.push(['Комментарий', values['comment']])

        const resultPrice = document.getElementById('result-price').value;
        const prepayment = document.getElementById('prepayment').value;

        // формирование списка продуктов и цен для PDF файла
        var productListPDF = []
        let rows = document.getElementById('input-rows')
        rows.querySelectorAll('input').forEach(elem => [
            (elem.type === "text") ? productListPDF.push([elem.value]) : '',
            (elem.type === "number") ? productListPDF.at(-1).push(elem.value) : ''
        ])
        // console.log(productListPDF)

        var pdfdoc = {
            info: {
                title: pdfName,
                author: 'funeral-app',
                subject: 'order',
                keywords: 'some key words'
            },
            pageSize: 'A4',
            pageOrientation: 'portrait',
            pageMargins: [50, 40, 50, 40],
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
                        body: data,
                    },
                    layout: 'noBorders',
                },

                { text: 'Детали заказа', fontSize: 14, bold: true, margin: [20, 0, 0, 4] },
                {
                    style: 'tableExample',
                    table: {
                        widths: [400, 80],
                        heights: 14,
                        body: productListPDF.map(product => product),
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
                    columns: [
                        { width: 240, text: '' },
                        {
                            width: 'auto',
                            style: 'tableExample',
                            table: {
                                widths: [150, 100],
                                body: [
                                    ['Итоговая стоимость:', `${resultPrice} руб`],
                                    ['Предоплата:', `${prepayment} руб`],
                                    ['Срок выполнения:', `${values['deadline']}`]
                                ],
                            },
                            layout: 'noBorders',
                            alignment: 'right'
                        },
                    ]
                },
                isScreenshoted
                    ? { image: screenshot, fit: [400, 300], alignment: 'center' }
                    : {}

            ],
            function() {
                // console.log(screenshot)
                if (screenshot !== "noscreen") {
                    return {
                        image: screenshot,
                        fit: [400, 300],
                        alignment: 'center'
                    }
                }
            },

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

    const addRow = () => {
        let rows = document.getElementById('input-rows')
        if (rows.childNodes.item(0).id === 'nothing-selected') {
            rows.removeChild(document.getElementById('nothing-selected'))
        }
        let row = document.createElement('div');
        row.className = "order-details-line"

        let nameInput = document.createElement('input');
        nameInput.type = "text"
        nameInput.className = "form-input"
        nameInput.style = "width: 83%; font-size: 16px"
        // nameInput.required = true

        let priceInput = document.createElement('input');
        priceInput.className = "form-input price"
        priceInput.type = "number"
        // priceInput.required = true

        row.appendChild(nameInput);
        row.appendChild(priceInput);
        rows.appendChild(row);

        const resultPrice = document.getElementById('result-price');
        const prepayment = document.getElementById('prepayment');
        rows.addEventListener('input', e => {
            total = 0;
            rows.querySelectorAll('input.price').forEach(elem => {
                if (elem.type === "number") total += +elem.value
            })
            resultPrice.value = `${total}`;
            prepayment.value = `${0}`
            initial['total'] = resultPrice.value
            initial['prepayment'] = prepayment.value
        })
    }

    return (
        <div>
            <Formik
                initialValues={initial}
                onSubmit={(values) => {
                    let rows = document.getElementById('input-rows')
                    // console.log(rows.querySelectorAll('input').length)
                    if (rows.querySelectorAll('input').length > 0) createPDF(values)
                    else alert("Оформление заказа невозможно.\nНи одна позиция не была выбрана!")
                }}
            >

                {({ errors, touched, isValidating }) => (
                    <Form>
                        <div style={{ display: "flex", width: '100%', flexDirection: "column", alignItems: "center" }}>
                            <div style={{
                                display: "flex", width: '100%', justifyContent: "center",
                                alignItems: "center", margin: '0px 0 8px 0', fontSize: "20px"
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

                        <div style={{ margin: "8px 0", padding: "0 0 12px 0", borderRadius: '4px', border: '1px solid #5c5c5c' }}>
                            <div>
                                {screenshot === 'noscreen'
                                    ? <span className="form-label" style={{ color: "orange" }}>Снимок сцены не сделан</span>
                                    : <img className="order-photo" src={`${screenshot}`} alt="order-screenshot" />}
                            </div>
                            <span className="form-label">Выбранные позиции:</span>
                            <div className="order-details">
                                <div id="input-rows" className="input-rows">
                                    <ListOfProducts productList={productList} PRICES={PRICES} MakeName={MakeName} />
                                </div>
                                <Button variant="success" id="add-input-btn" className="add-input-btn" onClick={addRow}>+</Button>
                                {/* {total !== 0 && */}
                                <div style={{ marginTop: "8px" }}>
                                    <div className="total">
                                        <span style={{ margin: "0 5px" }}>Итого, руб:</span>
                                        <input className="form-input price" style={{ margin: "2px 4px" }} id="result-price" defaultValue={total} disabled></input>
                                    </div>
                                    <div className="total">
                                        <span style={{ margin: "0 5px" }}>Предоплата, руб:</span>
                                        <input className="form-input price" style={{ margin: "2px 4px" }} id="prepayment" defaultValue={0}></input>
                                    </div>
                                    <div className="total">
                                        <span style={{ margin: "0 5px" }}>Срок выполнения:</span>
                                        <Field className="form-input price" style={{ margin: "2px 4px" }} name="deadline" autoComplete="off"
                                            placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                    </div>
                                    {errors.deadline && touched.deadline &&
                                        <div className="field-error" style={{ textAlign: "right", margin: "2px 4px" }}>
                                            {errors.deadline}
                                        </div>}
                                </div>
                                {/* } */}
                            </div>
                        </div>

                        <h5 style={{ textAlign: 'center', margin: '20px 0 0 0' }}>Данные заказчика</h5>

                        <span className="form-label">ФИО заказчика</span>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="customer_secondname" placeholder="Фамилия" validate={validateName} />
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
                            <div style={{ width: "32%" }}>
                                <span className="form-label">Контактный телефон</span>
                                <Field className="form-field form-input" name="number" autoComplete="off"
                                    placeholder="Телефон" validate={validateNumber} />
                                {errors.number && touched.number && <div className="field-error">{errors.number}</div>}
                            </div>
                            {/* <div style={{ width: "58%" }}>
                                <span className="form-label">Электронная почта</span>
                                <Field className="form-field form-input" name="email" autoComplete="off"
                                    placeholder="@" validate={validateEmail} />
                                {errors.email && touched.email && <div className="field-error">{errors.email}</div>}
                            </div> */}
                        </div>

                        <span className="form-label">ФИО на памятнике 1</span>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_secondname1" placeholder="Фамилия" validate={validateName} />
                                {errors.monument_secondname1 && touched.monument_secondname1
                                    && <div className="field-error">{errors.monument_secondname1}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_firstname1" placeholder="Имя" validate={validateName} />
                                {errors.monument_firstname1 && touched.monument_firstname1
                                    && <div className="field-error">{errors.monument_firstname1}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autoComplete="off"
                                    name="monument_surname1" placeholder="Отчество" validate={validateName} />
                                {errors.monument_surname1 && touched.monument_surname1
                                    && <div className="field-error">{errors.monument_surname1}</div>}
                            </div>
                        </div>

                        <div style={{ display: "flex", margin: "0 0 20px 0" }}>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <span className="form-label">Дата рождения</span>
                                <Field className="form-field form-input" name="birth_date1" autoComplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.birth_date1 && touched.birth_date1 && <div className="field-error">{errors.birth_date1}</div>}
                            </div>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <span className="form-label">Дата смерти</span>
                                <Field className="form-field form-input" name="death_date1" autoComplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.death_date1 && touched.death_date1 && <div className="field-error">{errors.death_date1}</div>}
                            </div>
                        </div>

                        {FIOcount === '2' &&
                            <div>
                                <span className="form-label">ФИО на памятнике 2 (необязательно)</span>
                                <div className="field-line">
                                    <div style={{ width: "32%" }}>
                                        <Field className="form-field form-input" autoComplete="off"
                                            name="monument_secondname2" placeholder="Фамилия" />
                                        {errors.monument_secondname2 && touched.monument_secondname2
                                            && <div className="field-error">{errors.monument_secondname2}</div>}
                                    </div>
                                    <div style={{ width: "32%" }}>
                                        <Field className="form-field form-input" autoComplete="off"
                                            name="monument_firstname2" placeholder="Имя" />
                                        {errors.monument_firstname2 && touched.monument_firstname2
                                            && <div className="field-error">{errors.monument_firstname2}</div>}
                                    </div>
                                    <div style={{ width: "32%" }}>
                                        <Field className="form-field form-input" autoComplete="off"
                                            name="monument_surname2" placeholder="Отчество" />
                                        {errors.monument_surname2 && touched.monument_surname2
                                            && <div className="field-error">{errors.monument_surname2}</div>}
                                    </div>
                                </div>

                                <div style={{ display: "flex", margin: "0 0 20px 0" }}>
                                    <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                        <span className="form-label">Дата рождения</span>
                                        <Field className="form-field form-input" name="birth_date2" autoComplete="off"
                                            placeholder="ДД.ММ.ГГГГ" />
                                        {errors.birth_date2 && touched.birth_date2 && <div className="field-error">{errors.birth_date2}</div>}
                                    </div>
                                    <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                        <span className="form-label">Дата смерти</span>
                                        <Field className="form-field form-input" name="death_date2" autoComplete="off"
                                            placeholder="ДД.ММ.ГГГГ" />
                                        {errors.death_date2 && touched.death_date2 && <div className="field-error">{errors.death_date2}</div>}
                                    </div>
                                </div>
                            </div>
                        }



                        <div style={{}}>
                            <span className="form-label">Комментарий к заказу</span>
                            <div className="input-group" >
                                <Field className="form-field form-input" name="comment"
                                    component="textarea" rows="2"></Field>
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