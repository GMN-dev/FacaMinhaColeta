import api from "../api";

export default async function getListAssetService(){
    try{
            const response =  await api.get("equipamentos/listagem")
        return response.data;
    }catch(error: any){
        return `Houve um errro: ${error.message}`;
    }
}