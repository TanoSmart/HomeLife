import { useState } from "react";
import logo from '../assets/logo.png';
import { House, Building2, Package, CalendarDays, MessageSquare, Bell, Settings } from 'lucide-react';
import '../css/Sidebar.css';
import '../css/ClientePage.css';
import '../css/App.css'

const usuario = JSON.parse(localStorage.getItem("usuario"));

const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: House },
    { id: 'imoveis', label: 'Imóveis', icon: Building2 },
    { id: 'reservas', label: 'Reservas', icon: CalendarDays },
    { id: 'notificacao', label: 'Notificações', icon: Bell },
    { id: 'configuracao', label: 'Configurações', icon: Settings }
];

const imovelItems = [
    {
        data: "Hoje",
        cliente: "João Silva",
        imovel: "Moradia T3 - Talatona"
    },
    {
        data: "Hoje",
        cliente: "Maria Fernandes",
        imovel: "Apartamento T2 - Kilamba"
    }
];

const noteItems = [
    {
        title: "Nova reserva realizada",
        time: "Há 5 minutos",
        cor: "blue",
        icon: "fa-calendar-check"
    },
    {
        title: "Novo cliente cadastrado",
        time: "Há 1 hora",
        cor: "green",
        icon: "fa-user"
    },
    {
        title: "Novo cliente cadastrado",
        time: "Há 15 minutos",
        cor: "orange",
        icon: "fa-flask"
    }
];

const reservasItems = [
    {
        foto: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
        imovel: "Moradia T3",
        cliente: "João Silva",
        dataReserva: "10/11/2024",
        dataEntrada: "10/11/2024",
        status: "Disponível"
    },
    {
        foto: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        imovel: "Apartamento T2",
        cliente: "Maria Fernandes",
        dataReserva: "10/11/2024",
        dataEntrada: "10/11/2024",
        status: "Reservado"
    }
];

const ClientePage = () => {

    const [page, setPage] = useState("dashboard");
    const [userType, setUserType] = useState("cliente");

    const comprarImovel = (imovel) => {

        const reservas = JSON.parse(localStorage.getItem("reservas")) || [];

        const novaReserva = {
            id: Date.now(),
            imovel,
            data: new Date().toLocaleDateString(),
            status: "pendente"
        };

        reservas.push(novaReserva);

        localStorage.setItem("reservas", JSON.stringify(reservas));

        alert("Reserva feita com sucesso!");

    };

    const renderPage = () => {

        switch (page) {

            case "dashboard":
                return <Dashboard />;

            case "imoveis":
                return <Imovel comprarImovel={comprarImovel} />;

            case "reservas":
                return <Reservas />;

            case "notificacao":
                return <Notificacao />;

            case "configuracao":
                return <Configuracao />;

            default:
                return <Dashboard />;
        }

    };

    return (

        <div className="container">

            <aside className="sidebar" id="sidebar">
                <img src={logo} className="logo-cliente-page" />

                <div className="user-info">
                    <strong>{userType}</strong>

                </div>

                <nav className="sidebar-nav">
                    <ul className="nav-list">
                        {menuItems.map((item) => (
                            <li key={item.label.toLowerCase()}>
                                <button onClick={() => setPage(item.id)} className="nav-link active" data-page={item.label.toLowerCase()}>
                                    <i className={"fas " + item.style}></i>
                                    <item.icon size={24} strokeWidth={1.5} />
                                    <span>{item.label}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <div className="content-wrapper">
                    {renderPage()}
                </div>
            </main>
        </div>

    );

};
//const isLoggedIn = (request) => {
//    const [loggin, setLoggin] = useState(true);
//    setLoggin(true);
//    loggin == request ? true : false;
//    return loggin;
//}
const Imovel = ({ comprarImovel }) => {

    const data = JSON.parse(
        readFileSync("./api/imoveis.json", "utf-8")
    ) || [];

    if (data.length === 0) {
        return (
            <div className="empty">
                <h3>Nenhum imóvel disponível</h3>
            </div>
        );
    }

    return (
        <section className="imovel">

            <div className="page-header">
                <h1>Imóveis</h1>
            </div>

            <div className="stats-grid">

                {data.map((item, index) => (

                    <div key={index} className="stat-card">

                        <img src={item.imagem} alt={item.titulo} />

                        <div className="stat-content">

                            <h3 className="stat-value">
                                {item.titulo}
                            </h3>

                            <p className="stat-label">
                                A partir de Kz {item.valor}
                            </p>

                            <p className="stat-change positive">
                                {item.quartos} quartos
                            </p>

                        </div>

                        <button
                            className="button-comprar"
                            onClick={() => comprarImovel(item)}
                        >
                            Comprar
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
};

const Dashboard = () => {
    return (
        <>
            <div id="dashboard" className="page-content active">
                <div className="page-header">
                    <h1>Dashboard</h1>
                    <p className="text-muted">Bem-vindo ao painel administrativo do Home Life.</p>
                </div>

                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon blue">
                            <i className="fas fa-home"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Imóveis Registrados</p>
                            <h3 className="stat-value">12</h3>
                            <span className="stat-change positive">↑ 2 novos</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon green">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Clientes Registrados</p>
                            <h3 className="stat-value">284</h3>
                            <span className="stat-change positive">↑ 8 novos esta semana</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon purple">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Reservas Ativas</p>
                            <h3 className="stat-value">36</h3>
                            <span className="stat-change neutral">Atualizado hoje</span>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon orange">
                            <i className="fas fa-building"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Imóveis Disponíveis</p>
                            <h3 className="stat-value">18</h3>
                            <span className="stat-change positive">↑ 3 disponíveis</span>
                        </div>
                    </div>
                </div>

                <div className="dashboard-grid">

                    <div className="card">
                        <div className="card-header">
                            <h2>Reservas por Semana</h2>
                        </div>
                        <div className="card-body">
                            <div className="chart-container">
                                <canvas id="weekChart" width="400" height="200"></canvas>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header">
                            <h2>Reservas Recentes</h2>
                            <button className="text-link">Ver Tudo</button>
                        </div>

                        <div className="card-body">
                            <div className="appointment-list">
                                {imovelItems.map((item, index) => (
                                    <div className="appointment-item" key={index}>
                                        <div className="appointment-time">{item.data}</div>

                                        <div className="appointment-details">
                                            <p className="appointment-patient">{item.cliente}</p>
                                            <p className="appointment-reason">{item.imovel}</p>
                                        </div>

                                        <div className="appointment-actions">
                                            <button className="btn btn-sm btn-primary">
                                                Ver
                                            </button>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-header">
                            <h2>Notificações Recentes</h2>
                        </div>

                        <div className="card-body">
                            <div className="notification-list">
                                {noteItems.map((item, index) => (
                                    <div className="notification-item" key={index}>
                                        <div className={"notification-icon " + item.cor}>
                                            <i className={"fas " + item.icon}></i>
                                        </div>

                                        <div className="notification-content">
                                            <p className="notification-title">{item.title}</p>
                                            <p className="notification-time">{item.time}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </>
    )
};

const Reservas = () => {
    return (
        <>
            <div id="reservas" className="page-content active">
                <div className="page-header">
                    <h1>Reservas</h1>
                    <p className="text-muted">Visualize e gerencie as reservas de imóveis</p>
                </div>

                <div className="card">
                    <div className="card-header">

                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Buscar reservas..."
                                id="search"
                            />
                        </div>

                    </div>

                    <div className="card-body">
                        <div className="table-responsive">

                            <table className="reservas-table">
                                <thead>
                                    <tr>
                                        <th>Cliente</th>
                                        <th>Imóvel</th>
                                        <th>Data Reserva</th>
                                        <th>Data Entrada</th>
                                        <th>Status</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {reservasItems.map((item, index) => (
                                        <tr key={index}>

                                            <td>{item.cliente}</td>
                                            <td>{item.imovel}</td>
                                            <td>{item.dataReserva}</td>
                                            <td>{item.dataEntrada}</td>

                                            <td>
                                                <span className={`status ${item.status}`}>
                                                    {item.status}
                                                </span>
                                            </td>

                                            <td>
                                                <div className="action-buttons">

                                                    <button
                                                        className="btn btn-sm btn-outline"
                                                        title="Visualizar"
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-success"
                                                        title="Confirmar"
                                                    >
                                                        <i className="fas fa-check"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        title="Cancelar"
                                                    >
                                                        <i className="fas fa-times"></i>
                                                    </button>

                                                </div>
                                            </td>

                                        </tr>
                                    ))}

                                </tbody>

                            </table>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
};

const Home = () => {
    return (
        <>
            <section>
                <div id="dashboard" className="page-content active">
                    <div className="page-header">
                        <h1>Dashboard</h1>
                        <p className="text-muted">Bem-vindo de volta! Aqui está o resumo de sua atividade.</p>
                    </div>

                    <div className='flex'>
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-icon blue">
                                    <i className="fas fa-calendar-check"></i>
                                </div>
                                <div className="stat-content">
                                    <p className="stat-label">Visita Hoje</p>
                                    <h3 className="stat-value">12</h3>
                                    <span className="stat-change positive">↑ 2 a mais que ontem</span>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon green">
                                    <i className="fas fa-users"></i>
                                </div>
                                <div className="stat-content">
                                    <p className="stat-label">Pacientes Atendidos</p>
                                    <h3 className="stat-value">284</h3>
                                    <span className="stat-change positive">↑ 8 novos esta semana</span>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon purple">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div className="stat-content">
                                    <p className="stat-label">Próxima Consulta</p>
                                    <h3 className="stat-value">14:30</h3>
                                    <span className="stat-change neutral">Em 45 minutos</span>
                                </div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-icon orange">
                                    <i className="fas fa-star"></i>
                                </div>
                                <div className="stat-content">
                                    <p className="stat-label">Avaliação Média</p>
                                    <h3 className="stat-value">4.8/5</h3>
                                    <span className="stat-change positive">↑ 12 avaliações</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

const Notificacao = () => {
    const [notificacoes, setNotificacoes] = useState([
        {
            id: 1,
            titulo: "Nova reserva recebida",
            texto: "João Pedro reservou o Apartamento T2 no Talatona",
            tempo: "há 5 minutos",
            tipo: "info",
            lida: false,
        },
        {
            id: 2,
            titulo: "Pagamento confirmado",
            texto: "Reserva #1023 foi paga com sucesso",
            tempo: "há 2 horas",
            tipo: "success",
            lida: false,
        },
        {
            id: 3,
            titulo: "Reserva cancelada",
            texto: "Maria Silva cancelou a reserva da Vivenda V3",
            tempo: "há 1 dia",
            tipo: "warning",
            lida: true,
        },
        {
            id: 4,
            titulo: "Novo imóvel aprovado",
            texto: "Seu imóvel foi aprovado e já está publicado",
            tempo: "há 2 dias",
            tipo: "success",
            lida: true,
        },
    ]);

    const icons = {
        info: "fas fa-home",
        success: "fas fa-check-circle",
        warning: "fas fa-exclamation-circle",
        message: "fas fa-envelope",
    };

    // marcar notificação individual como lida
    const marcarComoLida = (id) => {
        setNotificacoes((prev) =>
            prev.map((n) =>
                n.id === id ? { ...n, lida: true } : n
            )
        );
    };

    // marcar todas como lidas
    const marcarTodasComoLidas = () => {
        setNotificacoes((prev) =>
            prev.map((n) => ({ ...n, lida: true }))
        );
    };

    // limpar notificações
    const limparNotificacoes = () => {
        setNotificacoes([]);
    };

    const notificacoesNaoLidas = notificacoes.filter((n) => !n.lida).length;

    return (
        <div id="notificacoes" className="page-content active">
            {/* HEADER */}
            <div className="page-header">
                <h1>Notificações</h1>
                <p className="text-muted">
                    Gestão de reservas e alertas do sistema
                </p>
            </div>

            {/* CARD */}
            <div className="card">
                <div className="card-header">
                    <h2>
                        Todas as Notificações{" "}
                        <span className="badge">
                            {notificacoesNaoLidas} novas
                        </span>
                    </h2>

                    <div style={{ display: "flex", gap: "10px" }}>
                        <button
                            className="btn btn-sm btn-outline"
                            onClick={marcarTodasComoLidas}
                        >
                            Marcar tudo como lido
                        </button>

                        <button
                            className="btn btn-sm btn-danger"
                            onClick={limparNotificacoes}
                        >
                            Limpar
                        </button>
                    </div>
                </div>

                {/* BODY */}
                <div className="card-body">
                    {notificacoes.length === 0 ? (
                        <p className="text-muted">
                            Nenhuma notificação encontrada.
                        </p>
                    ) : (
                        <div className="notifications-full">
                            {notificacoes.map((n) => (
                                <div
                                    key={n.id}
                                    className={`notification-full ${n.lida ? "" : "unread"
                                        }`}
                                    onClick={() => marcarComoLida(n.id)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div
                                        className={`notification-full-icon ${n.tipo}`}
                                    >
                                        <i className={icons[n.tipo]}></i>
                                    </div>

                                    <div className="notification-full-content">
                                        <p className="notification-full-title">
                                            {n.titulo}
                                        </p>
                                        <p className="notification-full-text">
                                            {n.texto}
                                        </p>
                                        <p className="notification-full-time">
                                            {n.tempo}
                                        </p>
                                    </div>

                                    {!n.lida && (
                                        <div className="unread-dot" />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Configuracao = () => {
    return (
        <>
            <div id="perfil" className="page-content active">

                <div className="page-header">
                    <h1>Perfil</h1>
                    <p className="text-muted">
                        Gerencie suas informações e preferências
                    </p>
                </div>


                <div className="settings-container">


                    {/* Perfil */}
                    <div className="card">
                        <div className="card-header">
                            <h2>Informações do Perfil</h2>
                        </div>

                        <div className="card-body">
                            <form key={usuario.id} className="settings-section">

                                <div className="form-group">
                                    <label>Nome Completo</label>
                                    <input
                                        type="text"
                                        value={usuario.nome}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        value={usuario.email}
                                        readOnly
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Telefone</label>
                                    <input
                                        type="text"
                                        value={usuario.telefone}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Função</label>
                                    <input
                                        type="text"
                                        value={usuario.funcao}
                                        readOnly
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                >
                                    Salvar Alterações
                                </button>

                            </form>
                        </div>
                    </div>



                    {/* Segurança */}
                    <div className="card">

                        <div className="card-header">
                            <h2>Segurança</h2>
                        </div>

                        <div className="card-body">

                            <form className="settings-section">

                                <div className="form-group">
                                    <label>Senha Atual</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        value={usuario.senha}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Nova Senha</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Confirmar Senha</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                    />
                                </div>

                                <button className="btn btn-primary">
                                    Alterar Senha
                                </button>

                            </form>

                        </div>

                    </div>



                    {/* Preferências */}
                    <div className="card">

                        <div className="card-header">
                            <h2>Preferências</h2>
                        </div>

                        <div className="card-body">

                            <div className="settings-section">

                                <div className="settings-item">
                                    <div>
                                        <p className="settings-label">
                                            Modo Escuro
                                        </p>
                                        <p className="text-muted">
                                            Ativar tema escuro
                                        </p>
                                    </div>

                                    <div className="toggle-switch">
                                        <input type="checkbox" id="darkModeToggle" />
                                        <label htmlFor="darkModeToggle"></label>
                                    </div>

                                </div>


                                <hr />


                                <div className="settings-item">
                                    <div>
                                        <p className="settings-label">
                                            Notificações por Email
                                        </p>
                                    </div>

                                    <div className="toggle-switch">
                                        <input type="checkbox" id="emailNotifications" />
                                        <label htmlFor="emailNotifications"></label>
                                    </div>

                                </div>


                                <hr />


                                <div className="settings-item">
                                    <div>
                                        <p className="settings-label">
                                            Notificações do Sistema
                                        </p>
                                    </div>

                                    <div className="toggle-switch">
                                        <input type="checkbox" id="systemNotifications" />
                                        <label htmlFor="systemNotifications"></label>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>


                </div>

            </div>
        </>
    )
};

export default ClientePage;