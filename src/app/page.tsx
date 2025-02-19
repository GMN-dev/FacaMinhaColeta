"use client"

import "./globals.css"
import Asset from "@/components/Asset/Asset";
import Modal from "@/components/Modal/Modal";
import { ModalContext } from "@/context/AppContext";
import getListAssetService from "@/services/assetServices/getListAssetService";
import { Status } from "@/utils/enums/Status";
import AssetInterface from "@/utils/interfaces/AssetInterface";
import { useContext, useEffect, useState } from "react";


export default function Home() {
  const {isEnable, setIsEnable}: any = useContext(ModalContext);
  const [assets, setAssets] = useState<AssetInterface[]>([]);

  async function fetchData() {
    const response = await getListAssetService();
    setAssets(response); 
  }

  useEffect(() => {  
    fetchData();
    console.log(assets)
  }, []);

  function enableModal(): void{
    setIsEnable(true);
  }
  
  return (
    <main>
      <Modal></Modal>
      <div className="container-top">
        <h1 className="title-header">Relatório de coleta de equipamentos - Brasília.</h1>
        <button className="newAssetBtn" onClick={enableModal} type="button">Adicionar equipamento</button>
      </div>
      <section className="main-section">
        <section className="section-container">
          <h3>Pendente</h3>
          <div className="items">
          {assets
          .filter(element => element.status === Status.PENDENTE || element.status === Status.AGENDADO )
          .map((element)=>
              <Asset heritage={element.heritage} status={element.status} scheduledDate={element.scheduledDate}/>
            )}
          </div>
        </section>
        <section className="section-container">
          <h3>Coletados</h3>
          <div className="items">
          {assets
          .filter(element => element.status === Status.COLETADO)
          .map((element)=>
              <Asset heritage={element.heritage} status={element.status} scheduledDate={element.scheduledDate}/>
            )}
          </div>
        </section>
      </section>
    </main>
  );
}
