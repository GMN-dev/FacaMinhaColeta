'use client'

import ListAssetsInterface from "@/utils/interfaces/ListAssetsInterfae"
import Asset from "../Asset/Asset"
import { useEffect, useState } from "react"
import AssetInterface from "@/utils/interfaces/AssetInterface";
import { Status } from "@/utils/enums/Status";

export default function ListAssets({listAssets, status}: ListAssetsInterface){
    const assets: AssetInterface[] = listAssets.filter(asset => asset.status === status)
    
    return(<>
    <div className="items">
        {assets.map(asset => <Asset id={asset.id} heritage={asset.heritage} scheduledDate={asset.scheduledDate} status={asset.status} key={asset.id} />)}
    </div>
    </>)
}