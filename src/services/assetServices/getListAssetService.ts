import api from "../api";

export default async function getListAssetService(){
    try{
        const response =  await api.get("equipamentos/list")
        return response.data;
    }catch(error: any){
        return [];
    }
}