import Image from "next/image";
import styles from "./Asset.module.css"
import notebook from "../../../public/notebook.png"
import AssetInterface from "@/utils/interfaces/AssetInterface";
import deleteAsset from "@/services/assetServices/deleteAsset";
import { useContext } from "react";
import { AlertContext } from "@/context/AppContext";
import AlertInterface from "@/utils/interfaces/AlertInterface";

const Asset = ({heritage, status, scheduledDate, id}: AssetInterface) => {
    const {alert, setAlert}: any = useContext(AlertContext);

    async function deleteBtn(){
        const response = deleteAsset(id);
        setAlert({active: true, message: "Item deletado", type: "notify"})
    }

    return(
        <div className={styles.assetContainer}>
            <div className={styles.imgContainer}>  
                <Image src={notebook} width={80} height={80} alt="Monitor" />
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.top}>
                    <h1>{heritage}</h1>
                    <span>{status}</span>
                </div>
                <div>
                    <h3>Dias pendentes: {scheduledDate}</h3>
                </div>
                <div className={styles.containerBtn}>
                    
                    <button className={styles.btn} id={styles.check} type="button">
                        Coletar
                    </button>
                    
                    <button  className={styles.btn} id={styles.scheduled} type="button">
                        Agendado
                    </button>

                    <button onClick={deleteBtn} className={styles.btn} id={styles.del} type="button">
                        Deletar
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Asset;