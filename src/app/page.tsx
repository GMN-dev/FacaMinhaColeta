"use client"

import "./globals.css"
import Asset from "@/components/Asset/Asset";
import Modal from "@/components/Modal/Modal";
import { ModalContext } from "@/context/AppContext";
import { useContext } from "react";


export default function Home() {
  const {isEnable, setIsEnable}: any = useContext(ModalContext);
  
  function showModal(): void{
    setIsEnable(true);
  }

  return (
    <main>
      <Modal></Modal>
      <div className="container-top">
        <h1 className="title-header">Relatório de coleta de equipamentos - Brasília.</h1>
        <button className="newAssetBtn" onClick={showModal} type="button">Adicionar equipamento</button>
      </div>
      <section className="main-section">
        <section className="section-container">
          <h3>Pendente</h3>
          <div className="items">
          <Asset />            
          </div>
        </section>
        <section className="section-container">
          <h3>Agendado</h3>
          <div className="items">
          <Asset />
          </div>
        </section>
        <section className="section-container">
          <h3>Coletados</h3>
          <div className="items">
          <Asset />
          </div>
        </section>
      </section>
    </main>
  );
}
