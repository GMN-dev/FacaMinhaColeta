import updateAssetInterface from "@/utils/interfaces/updateAssetInterface";
import api from "../api"

export default async function updateAssetService(id: string, data: updateAssetInterface){
    try{
        const response = await api.patch(`equipamentos/update/${id}`, data);
        return response;
    }catch(error){
        return error;
    }
}