import React from "react";

export const ListRows = ({ product, PRICES }) => {

    product = product.split('/').at(-1)
    let name = product.match(/^(.+) \[/i)[1];
    let features = []
    var price;

    if (Object.keys(PRICES).includes(product)) {
        price = PRICES[product];
    } else price = 'N/A'

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
        <div className="order-details-line" key={product}>
            <span>
                {`- ${name} 
                    ${features.length > 0
                        ? '(' + features.map(elem => {
                            return features.indexOf(elem) === 0 ? elem : ' ' + elem
                        }) + ')'
                        : ''
                    }
                `}
            </span>
            {price === 'N/A'
                ? <span className="price" style={{ color: "red" }}> {price} </span>
                : <span className="price"> {price} </span>
            }

        </div>
    )
}
