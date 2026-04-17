import "../element.css"

function login() {
    return (
        <div className="login-form">
            <form action="" method="post">
                <h2>Criar notificação</h2>
                <div className="input-content">
                    <label htmlFor="destino">Destinatário</label>
                    <input type="text" id="destino" placeholder="example@gmail.com" />
                </div>
                <div className="input-content">
                    <label htmlFor="assunto">Assunto</label>
                    <input type="text" id="assunto" placeholder="Ex: Kibala Rei Leão" />
                </div>
                <div className="input-content">
                    <label htmlFor="senha">Descrição</label>
                    <textarea id="senha" placeholder="No que estás a pensar?"></textarea>
                </div>
                <div className="button">
                    <button type="submit">Criar uma notificação</button>
                </div>
            </form>
        </div>
    )
}

export default login;