import React, { createContext } from "react";
import all_product from '../Components/Assets/all_product'



export const Shopcategory = createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue = {all_product};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.childre}
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;