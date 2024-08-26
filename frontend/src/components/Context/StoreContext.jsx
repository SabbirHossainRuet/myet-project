import { createContext, useState } from "react";
import { et_list } from "../../assets/assets";
import { et_bundle } from "../../assets/assets";
import { services } from "../../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [isCallbackFormVisible, setIsCallbackFormVisible] = useState(false);
    const [callbackFormData, setCallbackFormData] = useState({});

    const toggleCallbackForm = () => {
        setIsCallbackFormVisible(!isCallbackFormVisible);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setCallbackFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted", callbackFormData);
        setIsCallbackFormVisible(false);
    };
    const contextValue = {
        et_list,
        et_bundle,
        services,
        isCallbackFormVisible,
        callbackFormData,
        toggleCallbackForm,
        handleFormChange,
        handleFormSubmit
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    );

};

export default StoreContextProvider;