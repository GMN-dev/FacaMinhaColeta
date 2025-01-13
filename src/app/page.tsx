import "./globals.css"

export default function Home() {
  return (
    <main>
      <div className="container-top">
        <h1 className="title-header">Relatório de coleta de equipamentos - Brasília.</h1>
        <button className="newAssetBtn" type="button">Adicionar equipamento</button>
      </div>
      <section className="main-section">
        <section className="section-container">
          <h3>Pendente</h3>
          <div className="items">
          </div>
        </section>
        <section className="section-container">
          <h3>Agendado</h3>
          <div className="items">
          </div>
        </section>
        <section className="section-container">
          <h3>Coletados</h3>
          <div className="items">
          </div>
        </section>
      </section>
    </main>
  );
}
