import { Status } from "../enums/Status";

export default interface updateAssetInterface{
    status: Status,
    scheduledDate: string;
}