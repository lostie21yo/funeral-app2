import React from "react";
import { ListRows } from "./ListRows";

export const ListOfProducts = ({ productList, PRICES, MakeName }) => {

    if (productList.length === 0) return <div className="field-error">Ничего не выбрано</div>

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {productList.map((product) => (
                <ListRows product={product} key={product} PRICES={PRICES} MakeName={MakeName} />
            ))}
        </div>
    )
}