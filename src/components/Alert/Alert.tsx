import { AlertContext } from "@/context/AppContext";
import { useContext, useEffect } from "react";
import styles from "../Alert/Alert.module.css";

export default function Alert() {
    const { alert, setAlert }: any = useContext(AlertContext);

    useEffect(() => {
        if (alert.active) {
            const timeOut = setTimeout(() => {
                setAlert({ active: false, message: "", type: "success" });
            }, 8000);

            return () => clearTimeout(timeOut);
        }
    }, [alert, setAlert]);

    let color = "";
    switch (alert.type) {
        case "success":
            color = "bg-green-500";
            break;
        case "error":
            color = "bg-red-500";
            break;
        case "notify":
            color = "bg-yellow-400";
            break;
    }

    if (!alert.active) return null;
    return (
        <div className={`${styles.container} ${color}`}>
            {alert.message}
        </div>
    );
}
