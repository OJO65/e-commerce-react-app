import React, { createContext } from "react";
import productdata from "../Components/Product-detail/ProductData";

export const ShopContext = createContext(null);

const ShopContextProvider = (product) => {
    const contextValue = {productdata};

    return (
        <ShopContext.Provider value={contextValue}>
            {product}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;