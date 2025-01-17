"use client"

import { SubmitHandler, useForm } from "react-hook-form";

const AssetForm = () => {
    
    const {register, handleSubmit, formState: { errors }} = useForm<AssetInterface>()   

    const onSubmit = (data: AssetInterface) =>{          
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
        <button type="submit">Concluir</button>
     </form>   
    );
}

export default AssetForm;