'use client'

import { useContext } from "react";
import styles from "./Modal.module.css"
import { ModalContext } from "@/context/AppContext";

const Modal = () => {
    const {isEnable, setIsEnable}: any = useContext(ModalContext);

    function disableModal():void{
        setIsEnable(false)
    }

    return(
        <div className={isEnable ? styles.enabled : styles.desabled} onClick={disableModal}> 
         <form className={isEnable ? "w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-4" : styles.desabled}  >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Dados do equipamento</h2>

        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
            </form>
        </div>
    );
}

export default Modal;