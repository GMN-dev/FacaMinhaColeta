'use client'

import ListAssetsInterface from "@/utils/interfaces/ListAssetsInterfae"
import Asset from "../Asset/Asset"
import { useEffect, useState } from "react"
import AssetInterface from "@/utils/interfaces/AssetInterface";
import { Status } from "@/utils/enums/Status";
import NoAsset from "../NoAsset/NoAsset";

export default function ListAssets({listAssets, status}: ListAssetsInterface){
    const assets: AssetInterface[] = listAssets.filter(asset => asset.status === status)

    return(<>
    <div>
        {assets.length == 0?<NoAsset column={status}/>:assets.map(asset => 
        <Asset id={asset.id} 
        heritage={asset.heritage} 
        scheduledDate={asset.scheduledDate} 
        status={asset.status} 
        key={asset.id} />)}
    </div>
    </>)
}