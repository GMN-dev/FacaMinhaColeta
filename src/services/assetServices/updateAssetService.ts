import UpdateAssetInterface from "@/utils/interfaces/UpdateAssetInterface";
import api from "../api"

export default async function updateAssetService(id: string, data: UpdateAssetInterface){
    try{
        const response = await api.patch(`equipamentos/update/${id}`, data);
        return response;
    }catch(error){
        return error;
    }
}