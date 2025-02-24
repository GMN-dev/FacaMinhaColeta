import styles from "../NoAsset/NoAsset.module.css"

export default function NoAsset({column}: {column: string}){
    let response = ""

    switch(column){
        case "PENDENTE":
            response = "Não há equipamentos pendentes para agendamento!"
            break;
        case "AGENDADO":
            response = "Não há agendamentos para retirada."
            break
        case "COLETADO":
            response = "Não há coletas registradas."
        }
    
    return(
        <div className={styles.container}>
            {response}
        </div>
        )
    }