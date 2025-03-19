"use client"

import Alert from "@/components/Alert/Alert";
import "../globals.css"
import ListAssets from "@/components/ListAssets/ListAssets";
import Modal from "@/components/Modal/Modal";
import { AssetsContext, ModalContext } from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const {setModal}: any = useContext(ModalContext);
  const {assets, fetchData}: any = useContext(AssetsContext); 

  useEffect(()=>{
    fetchData();
  }, [])
  

  function enableModal(): void{
    setModal({isEnable: true, section: "Form"});
  }

  return (
    <main>
      <Alert />
      <Modal />
      <div className="container-top">
        <h1 className="title-header">Relatório de coleta de equipamentos - Brasília.</h1>
        <button className="newAssetBtn" onClick={enableModal} type="button">Adicionar equipamento</button>
      </div>
      <section className="main-section">
        <section className="section-container">
        <h3>Pendentes</h3>
          <ListAssets listAssets={assets} status="PENDENTE"></ListAssets>
        </section>
        <section className="section-container">
        <h3>Agendados</h3>
          <ListAssets listAssets={assets} status="AGENDADO"></ListAssets>
        </section>
        <section className="section-container">
        <h3>Coletados</h3>
          <ListAssets listAssets={assets} status="COLETADO"></ListAssets>
        </section>
      </section>
    </main>
  );
}