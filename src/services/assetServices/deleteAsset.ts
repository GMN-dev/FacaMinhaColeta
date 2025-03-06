import api from "../api";

export default async function deleteAsset(id: string){
    try{
        const response = await api.delete(`equipamentos/delete/${id}`)
        return response.data;
    }catch(error){
        return error;
    }
}