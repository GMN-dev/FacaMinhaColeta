"use client"

import getListAssetService from "@/services/assetServices/getListAssetService";
import AlertInterface from "@/utils/interfaces/AlertInterface";
import AssetInterface from "@/utils/interfaces/AssetInterface";
import ModalInterface from "@/utils/interfaces/ModalInterface";
import { createContext, ReactNode, useState } from "react"

type ModalType = {
    modal: ModalInterface;
    setModal: (modal: ModalInterface) => void
}

type AlertType = {
    alert: AlertInterface;
    setAlert: (alert: AlertInterface) => void 
}

type AssetState = {
    assets: AssetInterface[],
    fetchData: () => void
}

type PropsType = {
    children: ReactNode;
}

export const ModalContext = createContext<ModalType | undefined>(undefined);
export const AlertContext = createContext<AlertType | undefined>(undefined);
export const AssetsContext = createContext<AssetState | undefined>(undefined)

const ModalContextProvider: React.FC<PropsType> = ({children}) => {
    const [modal, setModal] = useState<ModalInterface>({isEnable: false ,section: "Form"});
    const [alert, setAlert] = useState<AlertInterface>({active: false, message: "", type:"notify"});
    const [assets, setAssets] = useState<AssetInterface[]>([]);

    async function fetchData(){
        const response = await getListAssetService()
        setAssets(response)
    }

    return(
       <ModalContext.Provider value={{modal, setModal}}>
            <AlertContext.Provider value={{alert, setAlert}}>
                <AssetsContext.Provider value={{assets, fetchData}}>
                    {children}
                </AssetsContext.Provider>
            </AlertContext.Provider>
       </ModalContext.Provider> 
    );
};

export default ModalContextProvider;