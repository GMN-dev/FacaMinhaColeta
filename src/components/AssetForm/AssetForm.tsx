"use client"

import { FormInterface } from "@/utils/interfaces/FormInterface";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./AssetForm.module.css";
import getListAssetService from "@/services/assetServices/getListAssetService";

const AssetForm = () => {
    
    const {register, handleSubmit, formState: { errors }} = useForm<FormInterface>()   

    const onSubmit = (data: FormInterface) =>{          
            
    }   

    return(
     <form className={styles.form} action="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.containerTop}>
            <div className={styles.top}>
                <label htmlFor="heritage">Patrimônio:</label>
                <input className={styles.campo} maxLength={7} id="heritage" placeholder="C0XXXXX" {...register('heritage')} type="text" />
            </div>
            <div className={styles.top}>
                <label htmlFor="assetType">Equipamento:</label>
                <select className={styles.campo} {...register("assetType")} >
                    <option value="NOTEBOOK">Notebook</option>
                    <option value="MONITOR">Monitor</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <div>
                <label htmlFor="name">Nome do colaborador:</label>
                <input className={styles.campo} {...register('name')} type="text" placeholder="Marco Stefanini" id={styles.emailInput} />
            </div>
            <div>
                <label htmlFor="email">Email do colaborador:</label>
                <input className={styles.campo} {...register('email')} type="email" placeholder="usuario@stefanini.com" id={styles.emailInput} />
            </div>
        </div>
        <button className="bg-blue-600 text-white p-2 rounded-lg hover:brightness-110" type="submit">Acionar Colaborador</button>
     </form>   
    );
}

export default AssetForm;