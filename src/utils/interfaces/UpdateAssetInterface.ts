import { Status } from "../enums/Status";

export default interface UpdateAssetInterface{
    status: Status,
    scheduledDate: string;
}