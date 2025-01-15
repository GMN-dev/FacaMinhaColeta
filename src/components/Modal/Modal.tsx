'use client'

import { useContext } from "react";
import styles from "./Modal.module.css"
import { ModalContext } from "@/context/AppContext";

const Modal = () => {
    const {isEnable, setIsEnable}: any = useContext(ModalContext);
    
    function disableModal(): void{
        setIsEnable(false);
    }
    
    if(!isEnable){return null}

    return(   
        <div className={isEnable ? styles.enabled : styles.desabled} onClick={disableModal}>
            <form action=""></form>
        </div>
    );
}

export default Modal;