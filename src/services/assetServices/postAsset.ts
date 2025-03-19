import { AddAssetFormInterface } from "@/utils/interfaces/AddAssetFormInterface";
import api from "../api";

export default async function postAsset(form: AddAssetFormInterface){
    try{
        const response = await api.post("equipamentos/add", form)
        return response;      
    }catch(error: any){
        return error;
    } 
}