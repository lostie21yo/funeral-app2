import React, { useState } from "react";
import "./forms.css";
import { Formik, Form, Field } from "formik";
import PRICES from "../../assets/prices.json";

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

const ListOfProducts = ({ productList, sumTotal }) => {

    productList = Array.from(productList)
    var sum = 0
    if (productList.length === 0) return <div className="field-error">Ничего не выбрано</div>

    let res = productList.map(function (product) {
        product = product.split('/').at(-1)
        let name = product.match(/^(.+) \[/i)[1];
        let features = []
        var price;

        // const price = Object.keys(PRICES).includes(product) ? PRICES[product]: 'N/A'
        if (Object.keys(PRICES).includes(product)) {
            price = PRICES[product];
            sum += price
        } else price = 'N/A'
        sumTotal(sum)

        if (/_(\d)+_/.test(product)) {
            features.push(`ширина ${product.match(/_(\d+)+_/)[1]} см`);
        }
        if (/\((\d+)/.test(product)) {
            features.push(`высота ${product.match(/\((\d+)/)[1]} см`);
        }
        if (/(\w+)\)/.test(product)) {
            features.push(`цвет ${product.match(/(\w+)\)/)[1]}`);
        }

        return (
            <div className="order-details-line">
                <span key={product} >
                    {`- ${name} 
                    ${features.length > 0
                            ? '(' + features.map(elem => {
                                return features.indexOf(elem) === 0 ? elem : ' ' + elem
                            }) + ')'
                            : ''
                        }
                `}
                </span>
                <span className="price">
                    {price}
                </span>
            </div>
        )
    });

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {res}
        </div>
    )
}


export const ClientForm = ({ productList, date }) => {

    const [total, setTotal] = useState(0)

    const sumTotal = (sum) => {
        setTotal(sum);
    };

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
                    console.log(values['order_date']);
                    alert('Данные успешно сохранены!')
                }}
            >

                {({ errors, touched, isValidating }) => (
                    <Form>
                        <h5 style={{ textAlign: 'center' }}>Данные заказчика</h5>

                        <label className="form-label">ФИО заказчика</label>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="customer_secondname" placeholder="Фамилия" validate={validateName} place autoFocus />
                                {errors.customer_secondname && touched.customer_secondname
                                    && <div className="field-error">{errors.customer_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="customer_firstname" placeholder="Имя" validate={validateName} place />
                                {errors.customer_firstname && touched.customer_firstname
                                    && <div className="field-error">{errors.customer_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="customer_surname" placeholder="Отчество" validate={validateName} place />
                                {errors.customer_surname && touched.customer_surname
                                    && <div className="field-error">{errors.customer_surname}</div>}
                            </div>
                        </div>

                        <div className="field-line">
                            <div style={{ width: "40%" }}>
                                <label className="form-label">Контактный телефон</label>
                                <Field className="form-field form-input" name="number" autocomplete="off"
                                    placeholder="Телефон" validate={validateNumber} />
                                {errors.number && touched.number && <div className="field-error">{errors.number}</div>}
                            </div>
                            <div style={{ width: "58%" }}>
                                <label className="form-label">Электронная почта</label>
                                <Field className="form-field form-input" name="email" autocomplete="off"
                                    placeholder="@" validate={validateEmail} />
                                {errors.email && touched.email && <div className="field-error">{errors.email}</div>}
                            </div>
                        </div>

                        <hr style={{ margin: '16px 0 8px 0' }} />

                        <label className="form-label">ФИО на памятнике</label>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="monument_secondname" placeholder="Фамилия" validate={validateName} place />
                                {errors.monument_secondname && touched.monument_secondname
                                    && <div className="field-error">{errors.monument_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="monument_firstname" placeholder="Имя" validate={validateName} place />
                                {errors.monument_firstname && touched.monument_firstname
                                    && <div className="field-error">{errors.monument_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="monument_surname" placeholder="Отчество" validate={validateName} place />
                                {errors.monument_surname && touched.monument_surname
                                    && <div className="field-error">{errors.monument_surname}</div>}
                            </div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <label className="form-label">Дата рождения</label>
                                <Field className="form-field form-input" name="birth_date" autocomplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.birth_date && touched.birth_date && <div className="field-error">{errors.birth_date}</div>}
                            </div>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <label className="form-label">Дата смерти</label>
                                <Field className="form-field form-input" name="death_date" autocomplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.death_date && touched.death_date && <div className="field-error">{errors.death_date}</div>}
                            </div>
                        </div>

                        <div style={{}}>
                            <label className="form-label">Комментарий к заказу</label>
                            <div className="input-group" >
                                <Field className="form-field form-input" name="comment"
                                    component="textarea" rows="2"></Field>
                                {/* <textarea className="form-input" name="comment" aria-label="comment"></textarea> */}
                            </div>
                        </div>

                        <h5 style={{ textAlign: 'center', margin: '16px 0 8px 0' }}>Детали заказа</h5>
                        <div style={{ borderRadius: '4px', border: '1px solid #5c5c5c' }}>
                            <label className="form-label">Выбранные позиции:</label>
                            <div className="order-details">
                                <ListOfProducts productList={productList} sumTotal={sumTotal} />
                                {total !== 0 &&
                                    <div className="total">
                                        <span style={{ margin: "0 5px" }}>Итого, руб:</span> <span className="price">{total}</span>
                                    </div>}
                            </div>
                            <div>
                                <img className="order-photo" src="/rip.jpg" alt="order-screenshot" />
                            </div>
                        </div>

                        <hr/>

                        <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
                            <button style={{ width: "40%", margin: "10px" }} type="submit">
                                Подтвердить
                            </button>
                        </div>
                    </Form >
                )}
            </Formik >
        </div >
    )
};