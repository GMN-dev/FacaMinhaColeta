"use client"

import Alert from "@/components/Alert/Alert";
import "./globals.css"
import ListAssets from "@/components/ListAssets/ListAssets";
import Modal from "@/components/Modal/Modal";
import { AlertContext, ModalContext } from "@/context/AppContext";
import getListAssetService from "@/services/assetServices/getListAssetService";
import AssetInterface from "@/utils/interfaces/AssetInterface";
import { useContext, useEffect, useState } from "react";


export default function Home() {
  const {isEnable, setIsEnable}: any = useContext(ModalContext);
  const {alert, setAlert}: any = useContext(AlertContext);
  const [assets, setAssets] = useState<AssetInterface[]>([]);

  function enableModal(): void{
    setIsEnable(true);
  }
  
  async function fetchData(){
    const response = await getListAssetService();
    setAssets(response)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <main>
      <Alert></Alert>
      <Modal></Modal>
      <div className="container-top">
        <h1 className="title-header">Relatório de coleta de equipamentos - Brasília.</h1>
        <button className="newAssetBtn" onClick={enableModal} type="button">Adicionar equipamento</button>
      </div>
      <section className="main-section">
        <section className="section-container">
        <h3>Pendentes</h3>
          <ListAssets listAssets={Array.isArray(assets)?assets:[]} status="PENDENTE"></ListAssets>
        </section>
        <section className="section-container">
        <h3>Agendados</h3>
          <ListAssets listAssets={Array.isArray(assets)?assets:[]} status="AGENDADO"></ListAssets>
        </section>
        <section className="section-container">
        <h3>Coletados</h3>
          <ListAssets listAssets={Array.isArray(assets)?assets:[]} status="COLETADO"></ListAssets>
        </section>
      </section>
    </main>
  );
}
