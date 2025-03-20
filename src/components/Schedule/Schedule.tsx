'use client'

import { AlertContext, AssetsContext, ModalContext } from "@/context/AppContext";
import updateAssetService from "@/services/assetServices/updateAssetService";
import { Status } from "@/utils/enums/Status";
import UpdateAssetInterface from "@/utils/interfaces/UpdateAssetInterface";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";

export default function Schedule(status: Status){
    const [loading, setLoading] = useState<boolean>(false);
    const {register, handleSubmit, formState: { errors }} = useForm<UpdateAssetInterface>();
    const {setModal}: any = useContext(ModalContext);
    const {setAlert}: any = useContext(AlertContext);
    const {fetchData}: any = useContext(AssetsContext); 


    const onSubmit = async (data: UpdateAssetInterface, event?: any) => {
            event?.preventDefault();
            setLoading(true);
            const response = await updateAssetService();
            setLoading(false);
            setModal({isEnable: false, section: ""})
            // const message = response.status == 204?`${data.name} acionado(a) com sucesso!`:response.message;
            // setAlert({active: true, message: message, type: "success"})
            await fetchData()
        }; 

    return(<div className="flex text-lg justify-center items-center flex-col gap-4">
            <h3 className="text-xl" >Selecione uma data valida</h3>
            <form action="POST" onSubmit={handleSubmit(onSubmit)} className="flex text-lg justify-center items-center flex-col gap-8">
                <input className="bg-gray-50 p-2 rounded text-xl" type="date"  />
                <button className={`text-white p-2 w-full rounded-lg hover:brightness-110 ${!loading?"bg-blue-600":"bg-blue-400"}`} type="submit" disabled={loading}>{!loading?"Agendar":"Agendando..."}</button>
            </form>
            </div>)
}