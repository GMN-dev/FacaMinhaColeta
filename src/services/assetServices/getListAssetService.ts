import api from "../api";

export default function getListAssetService(){
    return api.get("equipamentos/listagem")
    .then(response => {return response.data})
    .catch(error => {return `Error: ${error.message}`})
}