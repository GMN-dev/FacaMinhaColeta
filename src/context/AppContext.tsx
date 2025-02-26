"use client"

import AlertInterface from "@/utils/interfaces/AlertInterface";
import { createContext, ReactNode, useState } from "react"

type ModalType = {
    isEnable: boolean;
    setIsEnable: (isEnable: boolean) => void
}

type AlertType = {
    alert: AlertInterface;
    setAlert: (alert: AlertInterface) => void 
}

type ModalPropsType = {
    children: ReactNode;
}

export const ModalContext = createContext<ModalType | undefined>(undefined);
export const AlertContext = createContext<AlertType | undefined>(undefined);

const ModalContextProvider: React.FC<ModalPropsType> = ({children}) => {
    const [isEnable, setIsEnable] = useState<boolean>(false);
    const [alert, setAlert] = useState<AlertInterface>({active: false, message: "", type:"notify"});

    return(
       <ModalContext.Provider value={{isEnable, setIsEnable}}>
            <AlertContext.Provider value={{alert, setAlert}}>
                {children}
            </AlertContext.Provider>
       </ModalContext.Provider> 
    );
};

export default ModalContextProvider;