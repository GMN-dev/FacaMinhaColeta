"use client"

import { AddAssetFormInterface } from "@/utils/interfaces/AddAssetFormInterface";
import { useForm } from "react-hook-form";
import styles from "./AssetForm.module.css";
import postAsset from "@/services/assetServices/postAsset";
import { useState, useContext } from "react";
import { AlertContext, AssetsContext, ModalContext } from "@/context/AppContext";

const  AssetForm = () => {
    const {setModal}: any = useContext(ModalContext);
    const {setAlert}: any = useContext(AlertContext);
    const [loading, setLoading] = useState<boolean>(false);
    const {register, handleSubmit, formState: { errors }} = useForm<AddAssetFormInterface>() 
    const {fetchData}: any = useContext(AssetsContext); 


    const onSubmit = async (data: AddAssetFormInterface, event?: any) => {
        event?.preventDefault();
        setLoading(true);
        const response = await postAsset(data);
        setLoading(false);
        setModal({isEnable: false, section: ""})
        const message = response.status == 204?`${data.name} acionado(a) com sucesso!`:response.message;
        setAlert({active: true, message: message, type: "success"})
        await fetchData()
      }; 


    return(
     <form className={styles.form} action="POST" onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.containerTop}>
            <div className={styles.top}>
                <label htmlFor="heritage">Patrimônio:</label>
                <input required className={styles.campo} maxLength={7} id="heritage" placeholder="C0XXXXX" {...register('heritage')} type="text" />
            </div>
            <div className={styles.top}>
                <label htmlFor="assetType">Equipamento:</label>
                <select required className={styles.campo} {...register("assetType")} >
                    <option value="NOTEBOOK">Notebook</option>
                    <option value="MONITOR">Monitor</option>
                </select>
            </div>
        </div>
        <div className="flex flex-col gap-5">
            <div>
                <label htmlFor="name">Nome do colaborador:</label>
                <input required className={styles.campo} {...register('name')} type="text" placeholder="Marco Stefanini" id={styles.emailInput} />
            </div>
            <div>
                <label htmlFor="email">Email do colaborador:</label>
                <input required className={styles.campo} {...register('email')} type="email" placeholder="usuario@stefanini.com" id={styles.emailInput} />
            </div>
        </div>
        <button className={`text-white p-2 rounded-lg hover:brightness-110 ${!loading?"bg-blue-600":"bg-blue-300"}`} type="submit" disabled={loading}>{!loading?"Acionar colaborador":"Enviando email..."}</button>
     </form>   
    );
}

export default AssetForm;