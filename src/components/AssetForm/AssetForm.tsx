"use client"

import { FormInterface } from "@/utils/interfaces/FormInterface";
import { SubmitHandler, useForm } from "react-hook-form";

const AssetForm = () => {
    
    const {register, handleSubmit, formState: { errors }} = useForm<FormInterface>()   

    const onSubmit = (data: FormInterface) =>{          
        console.log(data.assetType);
    }   

    return(
     <form action="POST" onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="heritage">Heritage</label>
            <input id="heritage" {...register('heritage')} type="text" />
        </div>
        <div>
            <label htmlFor="assetType">Tipo de Ativo</label>
            <select {...register("assetType")} >
                <option value="NOTEBOOK">Notebook</option>
                <option value="MONITOR">Monitor</option>
            </select>
        </div>
        <div>
            <label htmlFor="email"></label>
            <input {...register('email')} type="email" name="" id="" />
        </div>
        <button type="submit">Concluir</button>
     </form>   
    );
}

export default AssetForm;