"use client"

import { createContext, ReactNode, useState } from "react"

type ModalType = {
    isEnable: boolean;
    setIsEnable: (isEnable: boolean) => void
}
type ModalPropsType = {
    children: ReactNode;
}

const ModalContext = createContext<ModalType | undefined>(undefined);

const ModalContextProvider: React.FC<ModalPropsType> = ({children}) => {
    const [isEnable, setIsEnable] = useState(false);

    return(
       <ModalContext.Provider value={{isEnable, setIsEnable}}>
        {children}
       </ModalContext.Provider> 
    );
};

export default ModalContextProvider;