import React from "react";

export const ListRows = ({ product, PRICES, MakeName }) => {

    var price = 'N/A';
    if (Object.keys(PRICES).includes(product)) {
        price = PRICES[product];
    }

    return (
        <div className="order-details-line" key={product}>
            <span>
                - {MakeName(product)}
            </span>
            {price === 'N/A'
                ? <span className="price" style={{ color: "red" }}> {price} </span>
                : <span className="price"> {price} </span>
            }

        </div>
    )
}
