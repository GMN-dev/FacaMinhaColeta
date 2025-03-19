import Image from "next/image";
import styles from "./Asset.module.css"
import notebook from "../../../public/notebook.png"
import monitor from "../../../public/monitor.png"
import AssetInterface from "@/utils/interfaces/AssetInterface";
import deleteAsset from "@/services/assetServices/deleteAsset";
import { useContext } from "react";
import { AlertContext, AssetsContext, ModalContext } from "@/context/AppContext";
import updateAssetService from "@/services/assetServices/updateAssetService";
import { Status } from "@/utils/enums/Status";
import { AssetType } from "@/utils/enums/AssetType";

const Asset = ({heritage, status, scheduledDate, id, pendingDays, assetType}: AssetInterface) => {
    const { setAlert }: any = useContext(AlertContext);
    const { fetchData }: any = useContext(AssetsContext); 
    const { setModal }: any = useContext(ModalContext);
    
    async function deleteBtn(){
        const response = await deleteAsset(id);
        setAlert({active: true, message: "Item deletado", type: "notify"})
        await fetchData();
    }

    function setOnScheduleModalBtn(){
        setModal({isEnable: true, section:"Schedule"})
    }

    function setAssetPending(){
        
    }

    return(
        <div className={styles.assetContainer}>
            <div className={styles.imgContainer}>  
                <Image src={assetType==AssetType.MONITOR?monitor:notebook} width={80} height={80} alt="Monitor" />
            </div>
            <div className={styles.containerInfo}>
                <div className={styles.top}>
                    <h1>{heritage}</h1>
                    <span>{status}</span>
                </div>
                <div>
                    <h3>Dias pendentes: {pendingDays}</h3>
                    {scheduledDate!=null?scheduledDate:null}
                </div>
                <div className={styles.containerBtn}>
                    
                    <button className={styles.btn} id={styles.check} type="button">
                        Coletar
                    </button>
                    
                    <button onClick={status!=Status.AGENDADO?setOnScheduleModalBtn:setAssetPending} className={styles.btn} id={styles.scheduled} type="button">
                        {status!="AGENDADO"?"Agendar":"Suspender"}
                    </button>

                    <button onClick={deleteBtn}  className={styles.btn} id={styles.del} type="button">
                        Deletar
                    </button>

                </div>
            </div>
        </div>
    );
}

export default Asset;