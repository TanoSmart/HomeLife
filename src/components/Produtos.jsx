import '../css/Produtos.css';
import '../css/ClientePage.css'

const Produto = ({imagem, codigo, valor, titulo, quartos, nVagas, espaco}) => {
    return (
        <div key={codigo} className="stat-card">
            <img src={imagem} className="stat-icon blue" />
            <div className="stat-content">
                <div>
                    <span className="stat-change positive">↑  Baixou 15%</span>
                    <span className="stat-change positive">Cód. {codigo}</span>
                </div>
                <div>
                    <p className="stat-label">A partir de Kz {valor}</p>
                    <h3 className="stat-value">{titulo}</h3>
                    <p className="stat-change positive">1 a {quartos} quartos | {nVagas} Vaga | {espaco}</p>
                </div>
            </div>
            <button key={codigo} className="button-comprar bg-green-400" onClick={() => comprarImovel(item)}>Comprar</button>
        </div>
    )
}

export default Produto;

/*
         <div className="stat-card">
                                <img src={home} className="stat-icon blue" />
                                <div className="stat-content">
                                    <div>
                                        <span className="stat-change positive">↑  Baixou 15%</span>
                                        <span className="stat-change positive">Cód. 1628</span>
                                    </div>
                                    <div>
                                        <p className="stat-label">A partir de Kz 2.000.000.00</p>
                                        <h3 className="stat-value">Residencial Imperatriz do Norte</h3>
                                        <p className="stat-change positive">1 a 4 quartos | 1 Vaga | 38m a 48m</p>
                                    </div>
                                </div>
                                <button className="button-comprar bg-green-400">Comprar</button>
                            </div>

*/