import { createContext } from "react";
import { et_list } from "../../assets/assets";
import { et_bundle } from "../../assets/assets";
import { services } from "../../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
const contextValue = {
    et_list,
    et_bundle,
    services
};

return (
    <StoreContext.Provider value = {contextValue}>
        {props.children}
    </StoreContext.Provider>

);

};

export default StoreContextProvider;