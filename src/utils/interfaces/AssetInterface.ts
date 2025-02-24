import { Status } from "../enums/Status";

export default interface AssetInterface{
    id: string,
    heritage: string,
    status: Status,
    scheduledDate: string,
}

