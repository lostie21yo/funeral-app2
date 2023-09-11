import React from "react";
import "./forms.css";
import { Formik, Form, Field } from "formik";
import { useState } from "react";

function validateNumber(value) {
    let error;
    if (!value) {
        error = "Обязательное поле";
    } else if(!/^[+0-9]{10,12}$/i.test(value)) {
        error = "Неверный номер";
    }
    return error;
}

function validateEmail(value) {
    let error;
    if (!value) {
        error = "Обязательное поле";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        error = "Неверный почтовый адрес";
    }
    return error;
}

function validateName(value) {
    let error;
    if (!value){
        error = "Обязательное поле"
    }
    if (value === "admin") {
        error = "Хорошая попытка!";
    }
    return error;
}

const ListOfProducts = ({ productList }) => {

    console.log(productList)
    console.log(productList.size)

    return (
        <div>
            {productList}
            {/* {productList.forEach((product) => {
                // <div>` - ${product}`</div>
                // console.log(product)
            })} */}
        </div>
    )
}

export const ClientForm = ({ productList }) => {


    return (
        <div>
            <Formik
                initialValues={{
                    username: "",
                    email: "",
                    number: ""
                }}
                onSubmit={(values) => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched, isValidating }) => (

                    <Form>
                        <label style={{ display: "block" }}>ФИО заказчика</label>
                        <Field name="username" validate={validateName} />
                        {errors.username && touched.username && <div style={{color: 'red'}}>{errors.username}</div>}

                        <label style={{ display: "block" }}>Контактный телефон</label>
                        <Field name="number" validate={validateNumber} />
                        {errors.number && touched.number && <div style={{color: 'red'}}>{errors.number}</div>}

                        <label style={{ display: "block" }}>Электронная почта</label>
                        <Field name="email" validate={validateEmail} />
                        {errors.email && touched.email && <div style={{color: 'red'}}>{errors.email}</div>}

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
            <br />
            {/* `${product.split('/').at(-1).split(' [').at(0)}` */}
            <h5>Выбранные позиции:</h5>
            {/* {!isEmpty ? <h5 key={isEmpty}>Выбранные позиции:</h5> : <h5 key={isEmpty} style={{ color: 'red' }}>Ничего не выбрано</h5>} */}
            {/* {productList} */}
            <ListOfProducts productList={productList} />


        </div>
    )
};