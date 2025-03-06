'use client'

import ListAssetsInterface from "@/utils/interfaces/ListAssetsInterfae"
import Asset from "../Asset/Asset"
import NoAsset from "../NoAsset/NoAsset";

export default function ListAssets({listAssets, status}: ListAssetsInterface){
    
    const assets = listAssets.filter(asset => asset.status === status)

    return(<>
    <div>
        {
            assets.length == 0?<NoAsset/>:assets.map(asset => 
            <Asset
            id={asset.id} 
            heritage={asset.heritage} 
            scheduledDate={asset.scheduledDate} 
            status={asset.status} 
            key={asset.id} />)
        }
    </div>
    </>)
}