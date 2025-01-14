'use client'

import { useContext } from "react";
import styles from "./Modal.module.css"
import { ModalContext } from "@/context/AppContext";

const Modal = () => {
    const {isEnable, setIsEnable}: any = useContext(ModalContext);

    return(
        <div className={isEnable ? styles.enabled : styles.desabled}></div>
    );
}

export default Modal;