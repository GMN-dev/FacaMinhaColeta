import { AlertContext } from "@/context/AppContext";
import AlertInterface from "@/utils/interfaces/AlertInterface";
import { useContext, useEffect } from "react";
import styles from "../Alert/Alert.module.css"

export default function Alert(){
    const {alert, setAlert}: any = useContext(AlertContext);

    useEffect(()=>{
        const timeOut = setTimeout(()=>{
            setAlert({active: false, message: "", type: "success"})
            console.log("desativou a notificacao")
        },8000)

        return () => clearTimeout(timeOut);
    }, [])

    let color;
    switch(alert.type){
        case "success":
            color = "bg-green-500"
            break;

        case "error":
            color = "bg-red-500"
            break;

        case "notify":
            color = "bg-yellow-400"
            break;
    } 

    return(    
        <div className={alert.active?`${styles.container} ${color}`:"hidden"}>
          {alert.message}
        </div>
      );
}