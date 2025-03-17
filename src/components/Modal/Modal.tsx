"use client";

import { ReactNode, useContext } from "react";
import styles from "./Modal.module.css";
import { ModalContext } from "@/context/AppContext";
import AssetForm from "../AssetForm/AssetForm";
import Schedule from "../Schedule/Schedule";

const Modal = () => {
  const { modal, setModal }: any = useContext(ModalContext);

  function disableModal(): void {
    setModal({
        isEnable: false,
        section: "" 
    });
  }

  if (!modal.isEnable) return null;

  return (
    <div className={styles.enabled} onClick={disableModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {modal.section == "Form"?<AssetForm />:<Schedule />}
      </div>
    </div>
  );
};

export default Modal;
