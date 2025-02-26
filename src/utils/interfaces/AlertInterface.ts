export default interface AlertInterface{
    active: boolean,
    message: string,
    type: "success" | "error" | "notify";
}