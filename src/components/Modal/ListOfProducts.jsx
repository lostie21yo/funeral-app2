import React from "react";

const ListRows = ({ product, PRICES, MakeName }) => {

    var price = 'N/A';
    if (Object.keys(PRICES).includes(product)) {
        price = PRICES[product];
    }

    const summarizing = () => {
        let rows = document.getElementById('input-rows')
        const resultPrice = document.getElementById('result-price');
        const prepayment = document.getElementById('prepayment');
        let total = 0;
        rows.querySelectorAll('input.price').forEach(elem => {
            if (elem.type === "number") total += +elem.value
        })
        resultPrice.value = `${total}`;
        prepayment.value = `${0}`
    }

    return (
        <div className="order-details-line" key={product}>
            <input className="form-input" type="text" defaultValue={MakeName(product)} style={{ width: "83%", fontSize: "16px" }}  />
            <input defaultValue={price} type="number" className="form-input price" onChange={summarizing}  />
        </div>
    )
}

export const ListOfProducts = ({ productList, PRICES, MakeName }) => {

    if (productList.length === 0) return <div className="field-error" id="nothing-selected">Ничего не выбрано</div>

    return (
        <>
            {productList.map((product, id) => (
                <ListRows product={product} key={product} PRICES={PRICES} MakeName={MakeName} id={id} />
            ))}
        </>
    )
}