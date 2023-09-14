import React from "react";
import "./forms.css";
import { Formik, Form, Field } from "formik";

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

const ListOfProducts = ({ productList }) => {

    productList = Array.from(productList)
    // console.log(productList)

    let res = productList.map(function (product) {
        product = product.split('/').at(-1)
        let name = product.match(/^(.+) \[/i)[1];
        let width = ''
        if (/_(\d)+_/.test(product)) {
            width = `, ширина ${product.match(/_(\d+)+_/)[1]}`;
        }
        let height = ''
        if (/\((\d+)/.test(product)) {
            height = `, высота ${product.match(/\((\d+)/)[1]}`;
        }
        let color = ''
        if (/(\w+)\)/.test(product)) {
            color = `, цвет ${product.match(/(\w+)\)/)[1]}`;
        }

        // let formattedDate = match[3] + "." + match[2] + "." + match[1];
        // console.log(formattedDate); // "29.03.2023"

        // const name = product.split('/').at(-1)
        // let result = product.(/\w+/g)
        return <span key={product} style={{ padding: "0 0 0 10px" }}>{`- ${name} (${width}${height})`}</span>
    });

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            {res}
        </div>
    )
}



export const ClientForm = ({ productList, date }) => {

    console.log(date)
    return (
        <div>
            <Formik
                initialValues={{
                    order_date: date,
                    customer_secondname: "admin",
                    customer_firstname: "admin",
                    customer_surname: "admin",
                    email: "dsadsa@mail.com",
                    number: "+79998887766",
                    monument_secondname: "nobody",
                    monument_firstname: "nobody",
                    monument_surname: "nobody",
                    birth_date: "04.04.2050",
                    death_date: "05.05.2150",
                    comment: "there is nothing to comment"
                }}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
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
                                    && <div style={{ color: 'red' }}>{errors.customer_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="customer_firstname" placeholder="Имя" validate={validateName} place />
                                {errors.customer_firstname && touched.customer_firstname
                                    && <div style={{ color: 'red' }}>{errors.customer_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="customer_surname" placeholder="Отчество" validate={validateName} place />
                                {errors.customer_surname && touched.customer_surname
                                    && <div style={{ color: 'red' }}>{errors.customer_surname}</div>}
                            </div>
                        </div>

                        <div className="field-line">
                            <div style={{ width: "40%" }}>
                                <label className="form-label">Контактный телефон</label>
                                <Field className="form-field form-input" name="number" autocomplete="off"
                                    placeholder="Телефон" validate={validateNumber} />
                                {errors.number && touched.number && <div style={{ color: 'red' }}>{errors.number}</div>}
                            </div>
                            <div style={{ width: "58%" }}>
                                <label className="form-label">Электронная почта</label>
                                <Field className="form-field form-input" name="email" autocomplete="off"
                                    placeholder="@" validate={validateEmail} />
                                {errors.email && touched.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                            </div>
                        </div>

                        <hr />

                        <label className="form-label">ФИО на памятнике</label>
                        <div className="field-line">
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="monument_secondname" placeholder="Фамилия" validate={validateName} place />
                                {errors.monument_secondname && touched.monument_secondname
                                    && <div style={{ color: 'red' }}>{errors.monument_secondname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="monument_firstname" placeholder="Имя" validate={validateName} place />
                                {errors.monument_firstname && touched.monument_firstname
                                    && <div style={{ color: 'red' }}>{errors.monument_firstname}</div>}
                            </div>
                            <div style={{ width: "32%" }}>
                                <Field className="form-field form-input" autocomplete="off"
                                    name="monument_surname" placeholder="Отчество" validate={validateName} place />
                                {errors.monument_surname && touched.monument_surname
                                    && <div style={{ color: 'red' }}>{errors.monument_surname}</div>}
                            </div>
                        </div>

                        <div style={{ display: "flex" }}>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <label className="form-label">Дата рождения</label>
                                <Field className="form-field form-input" name="birth_date" autocomplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.birth_date && touched.birth_date && <div style={{ color: 'red' }}>{errors.birth_date}</div>}
                            </div>
                            <div style={{ width: "32%", margin: "0 2% 0 0" }}>
                                <label className="form-label">Дата смерти</label>
                                <Field className="form-field form-input" name="death_date" autocomplete="off"
                                    placeholder="ДД.ММ.ГГГГ" validate={validateDate} />
                                {errors.death_date && touched.death_date && <div style={{ color: 'red' }}>{errors.death_date}</div>}
                            </div>
                        </div>

                        <div style={{}}>
                            <label className="form-label">Комментарий к заказу</label>
                            <div className="input-group" >
                                <textarea className="form-input" name="comment" aria-label="comment"></textarea>
                            </div>
                        </div>


                        <h5 style={{ textAlign: 'center', margin: '16px 0 0 0' }}>Детали заказа</h5>
                        <div style={{}}>
                            <div style={{ border: '1px solid yellow' }}>
                                <label className="form-label">Выбранные позиции:</label>
                                <ListOfProducts productList={productList} />

                            </div>
                            <div style={{ border: '1px solid green' }}>
                                <label className="form-label">Фото</label>
                            </div>
                        </div>


                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            <br />
            {/* `${product.split('/').at(-1).split(' [').at(0)}` */}
            {/* {!isEmpty ? <h5 key={isEmpty}>Выбранные позиции:</h5> : <h5 key={isEmpty} style={{ color: 'red' }}>Ничего не выбрано</h5>} */}
            {/* {productList} */}


        </div>
    )
};