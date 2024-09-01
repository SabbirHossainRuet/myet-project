import { createContext, useState } from "react";
import { et_list } from "../../assets/assets";
import { et_bundle } from "../../assets/assets";
import { services } from "../../assets/assets";
import { employeeservices } from "../../assets/assets";
import { newsData } from "../../assets/assets";


export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [isCallbackFormVisible, setIsCallbackFormVisible] = useState(false);
    const [callbackFormData, setCallbackFormData] = useState({});
    const [showDateTime, setShowDateTime] = useState(true);
    const [formTitle, setFormTitle] = useState('');

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
        newsData,
        et_list,
        et_bundle,
        services,
        employeeservices,
        isCallbackFormVisible,
        callbackFormData,
        showDateTime,
        setShowDateTime,
        formTitle,
        setFormTitle,
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