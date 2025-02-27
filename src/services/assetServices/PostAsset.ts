import { FormInterface } from "@/utils/interfaces/FormInterface";
import api from "../api";

export default async function postAsset(form: FormInterface){
    try{
        const response = await api.post("equipamentos/add", form)
        console.log(response)
        return response;      
    }catch(error: any){
        return error;
    } 
}