import { AssetType } from "../enums/AssetType"

export interface AddAssetFormInterface{
    heritage: string,
    assetType: AssetType,
    email: string
    name: string
}