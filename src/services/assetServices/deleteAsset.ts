import api from "../api";

export default async function deleteAsset(id: string){
    try{
        const response = await api.delete(`equipamentos/delete/${id}`)
        // switch(response.status){
        //     case 204:
        //         return 
        // } 

        console.log(response)
    }catch(error){
        return error;
    }
}