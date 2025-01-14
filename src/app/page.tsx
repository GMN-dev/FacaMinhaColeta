import "./globals.css"
import Asset from "@/components/Asset/Asset";
import Modal from "@/components/Modal/Modal";
export default function Home() {
  return (
    <main>
      <Modal></Modal>
      <div className="container-top">
        <h1 className="title-header">Relatório de coleta de equipamentos - Brasília.</h1>
        <button className="newAssetBtn" type="button">Adicionar equipamento</button>
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
