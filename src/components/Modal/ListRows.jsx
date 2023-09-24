import React from "react";

export const ListRows = ({ product, PRICES, MakeName }) => {

    product = product.split('/').at(-1)

    var price;

    if (Object.keys(PRICES).includes(product)) {
        price = PRICES[product];
    } else price = 'N/A'

    

    return (
        <div className="order-details-line" key={product}>
            <span>
                {MakeName(product)}
            </span>
            {price === 'N/A'
                ? <span className="price" style={{ color: "red" }}> {price} </span>
                : <span className="price"> {price} </span>
            }

        </div>
    )
}
