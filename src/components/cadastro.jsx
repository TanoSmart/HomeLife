import { Link } from "lucide-react";
function NewNotification() {
    return (
        <div className="login-form">
            <form action="" method="post">
                <h2>Crie a tua conta</h2>
                <div className="input-content">
                    <label htmlFor="Nome">Nome de Usuário</label>
                    <input type="text" id="Nome" placeholder="ex. @ManassésTano" />
                </div>
                <div className="input-content">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="example@gmail.com" />
                </div>
                <div className="input-content">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="No mínimo 8 caracteres" />
                </div>
                <div className="button">
                    <button type="submit">Sign Up</button>
                    <p>Ainda não fez,<Link to="route()"> login</Link></p>
                </div>
            </form>
        </div>
    )
}

export default NewNotification;