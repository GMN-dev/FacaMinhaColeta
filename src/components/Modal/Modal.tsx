'use client'

import { useContext } from "react";
import styles from "./Modal.module.css"
import { ModalContext } from "@/context/AppContext";
import AssetForm from "../AssetForm/AssetForm";

const Modal = () => {
    const {isEnable, setIsEnable}: any = useContext(ModalContext);
    
    function disableModal(): void{
        setIsEnable(false);
    }
    
    if(!isEnable){return null}

    return(   
        <div className={isEnable ? styles.enabled : styles.disable} onClick={disableModal}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <AssetForm />
        </div>
    </div>
    );
}

export default Modal;