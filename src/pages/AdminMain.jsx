//import { redirect } from "react-router";
import { useState } from "react";
import HeaderMenu from "../components/HeaderMenu";
import { House, Headset, UserCog, BarChart, Users, User, Calendar, Bell, Settings, HomeIcon } from 'lucide-react';
import './styles.css';

const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: House },
    { id: 'imoveis', label: 'Imóveis', icon: HomeIcon },
    { id: 'reservas', label: 'Reservas', icon: Calendar },
    { id: 'clientes', label: 'Clientes', icon: Users },
    { id: 'relatorios', label: 'Relatórios', icon: BarChart },
    { id: 'usuarios', label: 'Utilizadores', icon: UserCog },
    { id: 'perfil', label: 'Perfil', icon: User },
    { id: 'notificacoes', label: 'Notificações', icon: Bell },
    { id: 'configuracoes', label: 'Configurações', icon: Settings },
    { id: 'suporte', label: 'Suporte', icon: Headset },
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

const IItems = [
    { NomeCompleto: 'Manassés Tano Madiata', Email: 'manassesmadiata@gmail.com', senha: 'mrj683753@', Descricao: 'Yha!, sim' },
];

const reservasItems = [
    {
        cliente: "João Silva",
        imovel: "Moradia T3 - Talatona",
        dataReserva: "15/04/2026",
        dataEntrada: "20/04/2026",
        status: "Pendente"
    },
    {
        cliente: "Maria Fernandes",
        imovel: "Apartamento T2 - Kilamba",
        dataReserva: "14/04/2026",
        dataEntrada: "18/04/2026",
        status: "Confirmada"
    }
];

const clientesItems = [
    {
        foto: "https://i.pravatar.cc/40?img=1",
        nome: "João Silva",
        email: "joao@email.com",
        telefone: "923 000 000",
        reservas: 3
    },
    {
        foto: "https://i.pravatar.cc/40?img=2",
        nome: "Maria Fernandes",
        email: "maria@email.com",
        telefone: "924 000 000",
        reservas: 5
    }
];

const usuariosItems = [
    {
        foto: "https://i.pravatar.cc/40?img=11",
        nome: "Administrador",
        email: "admin@homelife.com",
        telefone: "923000000",
        perfil: "Admin",
        status: "Ativo"
    },
    {
        foto: "https://i.pravatar.cc/40?img=12",
        nome: "Gestor Imobiliário",
        email: "gestor@homelife.com",
        telefone: "924000000",
        perfil: "Gestor",
        status: "Ativo"
    }
];

const perfilItems = [
    {
        nome: "Administrador",
        email: "admin@homelife.com",
        telefone: "923000000",
        funcao: "Administrador"
    }
]

//const isLoggedIn = (request) => {
//    const [loggin, setLoggin] = useState(true);
//    setLoggin(true);
//    loggin == request ? true : false;
//    return loggin;
//}

const AdminMain = () => {
    //if (!isLoggedIn(request)) {
    //    throw redirect("/login");
    //}

    const [page, setPage] = useState("dashboard");
    const [senha, setSenha] = useState("");

    const renderPage = () => {
        switch (page) {
            case "dashboard":
                return <DashboardPage />;
            case "imoveis":
                return <ImoveisPage />;
            case "reservas":
                return <ReservasPage />;
            case "clientes":
                return <ClientesPage />;
            case "relatorios":
                return <RelatoriosPage />;
            case "usuarios":
                return <UsuariosPage />;
            case "perfil":
                return <PerfilPage />;
            case "notificacoes":
                return <NotificacoesPage />;
            case "configuracoes":
                return <ConfiguracoesPage />;
            case "suporte":
                return <SuportePage />;
            default:
                return <DashboardPage />;
        }
    };
    return (
        <div className="container">

            <aside className="sidebar" id="sidebar">
                <div className="sidebar-header">
                    <div className="logo">
                        <i className="fas fa-heart-pulse"></i>
                        <span>Home Life</span>
                    </div>
                    <button className="toggle-sidebar" id="toggleSidebar">
                        <i className="fas fa-bars"></i>
                    </button>
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
                <HeaderMenu />
                <div className="content-wrapper">
                    {renderPage()}
                </div>
            </main>
        </div>
    )
};

const DashboardPage = () => {
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

const ImoveisPage = () => {
  const [search, setSearch] = useState("");

  const [imoveis, setImoveis] = useState([
    {
      id: 1,
      foto: "https://via.placeholder.com/60",
      titulo: "Apartamento T2 Talatona",
      proprietario: "João Pedro",
      localizacao: "Talatona, Luanda",
      valor: 120000000,
      status: "disponivel"
    },
    {
      id: 2,
      foto: "https://via.placeholder.com/60",
      titulo: "Vivenda V3 Viana",
      proprietario: "Maria Silva",
      localizacao: "Viana, Luanda",
      valor: 90000000,
      status: "reservado"
    },
    {
      id: 3,
      foto: "https://via.placeholder.com/60",
      titulo: "Escritório Centro",
      proprietario: "Empresa X",
      localizacao: "Centro, Luanda",
      valor: 200000000,
      status: "vendido"
    }
  ]);

  const filteredImoveis = imoveis.filter((item) =>
    item.titulo.toLowerCase().includes(search.toLowerCase()) ||
    item.proprietario.toLowerCase().includes(search.toLowerCase()) ||
    item.localizacao.toLowerCase().includes(search.toLowerCase())
  );

  const eliminarImovel = (id) => {
    setImoveis((prev) => prev.filter((item) => item.id !== id));
  };

  const visualizarImovel = (item) => {
    console.log("Visualizar:", item);
  };

  const editarImovel = (item) => {
    console.log("Editar:", item);
  };

  return (
    <div id="imoveis" className="page-content active">

      {/* HEADER */}
      <div className="page-header">
        <h1>Imóveis</h1>
        <p className="text-muted">
          Gestão completa de propriedades do sistema
        </p>
      </div>

      <div className="card">

        {/* HEADER ACTIONS */}
        <div className="card-header">

          <div className="search-box">
            <i className="fas fa-search"></i>

            <input
              type="text"
              placeholder="Buscar imóveis..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="btn btn-primary">
            <i className="fas fa-plus"></i> Novo Imóvel
          </button>

        </div>

        {/* TABLE */}
        <div className="card-body">

          <div className="table-responsive">

            <table className="imoveis-table">

              <thead>
                <tr>
                  <th>Foto</th>
                  <th>Título</th>
                  <th>Proprietário</th>
                  <th>Localização</th>
                  <th>Valor (Kz)</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>

              <tbody>
                {filteredImoveis.map((item) => (
                  <tr key={item.id}>

                    <td>
                      <img
                        src={item.foto}
                        alt="imóvel"
                        className="imovel-avatar"
                      />
                    </td>

                    <td>{item.titulo}</td>
                    <td>{item.proprietario}</td>
                    <td>{item.localizacao}</td>

                    <td>
                      {item.valor.toLocaleString("pt-AO")} Kz
                    </td>

                    <td>
                      <span className={`status ${item.status}`}>
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <div className="action-buttons">

                        <button
                          className="btn btn-sm btn-outline"
                          onClick={() => visualizarImovel(item)}
                        >
                          <i className="fas fa-eye"></i>
                        </button>

                        <button
                          className="btn btn-sm btn-outline"
                          onClick={() => editarImovel(item)}
                        >
                          <i className="fas fa-edit"></i>
                        </button>

                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => eliminarImovel(item.id)}
                        >
                          <i className="fas fa-trash"></i>
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
  );
};

const ReservasPage = () => {
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

const ClientesPage = () => {
    return (
        <>
            <div id="clientes" className="page-content active">
                <div className="page-header">
                    <h1>Clientes</h1>
                    <p className="text-muted">Visualize e gerencie os clientes</p>
                </div>

                <div className="card">
                    <div className="card-header">

                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Buscar clientes..."
                                id="search"
                            />
                        </div>

                        <button className="btn btn-primary">
                            <i className="fas fa-plus"></i> Novo Cliente
                        </button>

                    </div>

                    <div className="card-body">
                        <div className="table-responsive">

                            <table className="clientes-table">
                                <thead>
                                    <tr>
                                        <th>Foto</th>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Telefone</th>
                                        <th>Total Reservas</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {clientesItems.map((item, index) => (
                                        <tr key={index}>

                                            <td>
                                                <img
                                                    src={item.foto}
                                                    alt="Cliente"
                                                    className="cliente-avatar"
                                                />
                                            </td>

                                            <td>{item.nome}</td>
                                            <td>{item.email}</td>
                                            <td>{item.telefone}</td>
                                            <td>{item.reservas}</td>

                                            <td>
                                                <div className="action-buttons">

                                                    <button
                                                        className="btn btn-sm btn-outline"
                                                        title="Visualizar"
                                                    >
                                                        <i className="fas fa-eye"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-outline"
                                                        title="Editar"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        title="Excluir"
                                                    >
                                                        <i className="fas fa-trash"></i>
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

const RelatoriosPage = () => {
    return (
        <>
            <div id="relatorios" className="page-content active">

                <div className="page-header">
                    <h1>Relatórios</h1>
                    <p className="text-muted">
                        Visualize estatísticas e relatórios do sistema
                    </p>
                </div>

                <div className="stats-grid">

                    <div className="stat-card">
                        <div className="stat-icon blue">
                            <i className="fas fa-building"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total de Imóveis</p>
                            <h3 className="stat-value">45</h3>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon green">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Total de Reservas</p>
                            <h3 className="stat-value">120</h3>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon purple">
                            <i className="fas fa-users"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Clientes</p>
                            <h3 className="stat-value">85</h3>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon orange">
                            <i className="fas fa-chart-line"></i>
                        </div>
                        <div className="stat-content">
                            <p className="stat-label">Reservas Este Mês</p>
                            <h3 className="stat-value">32</h3>
                        </div>
                    </div>

                </div>


                <div className="dashboard-grid">

                    <div className="card">
                        <div className="card-header">
                            <h2>Reservas por Mês</h2>
                        </div>

                        <div className="card-body">
                            <div className="chart-container">
                                <canvas id="reservasChart"></canvas>
                            </div>
                        </div>

                    </div>


                    <div className="card">
                        <div className="card-header">
                            <h2>Imóveis Mais Reservados</h2>
                        </div>

                        <div className="card-body">
                            <div className="chart-container">
                                <canvas id="imoveisChart"></canvas>
                            </div>
                        </div>

                    </div>

                </div>


                <div className="card">

                    <div className="card-header">
                        <h2>Exportar Relatórios</h2>
                    </div>

                    <div className="card-body">

                        <div className="action-buttons">

                            <button className="btn btn-primary">
                                <i className="fas fa-file-pdf"></i>
                                Exportar PDF
                            </button>

                            <button className="btn btn-success">
                                <i className="fas fa-file-excel"></i>
                                Exportar Excel
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
};

const UsuariosPage = () => {
    return (
        <>
            <div id="usuarios" className="page-content active">

                <div className="page-header">
                    <h1>Utilizadores</h1>
                    <p className="text-muted">
                        Visualize e gerencie os utilizadores do sistema
                    </p>
                </div>

                <div className="card">

                    <div className="card-header">

                        <div className="search-box">
                            <i className="fas fa-search"></i>
                            <input
                                type="text"
                                placeholder="Buscar utilizador..."
                                id="search"
                            />
                        </div>

                        <button className="btn btn-primary">
                            <i className="fas fa-plus"></i>
                            Novo Utilizador
                        </button>

                    </div>


                    <div className="card-body">
                        <div className="table-responsive">

                            <table className="usuarios-table">

                                <thead>
                                    <tr>
                                        <th>Foto</th>
                                        <th>Nome</th>
                                        <th>Email</th>
                                        <th>Telefone</th>
                                        <th>Perfil</th>
                                        <th>Status</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>


                                <tbody>

                                    {usuariosItems.map((item, index) => (
                                        <tr key={index}>

                                            <td>
                                                <img
                                                    src={item.foto}
                                                    alt="Usuário"
                                                    className="usuario-avatar"
                                                />
                                            </td>

                                            <td>{item.nome}</td>
                                            <td>{item.email}</td>
                                            <td>{item.telefone}</td>

                                            <td>
                                                <span className={`role ${item.perfil}`}>
                                                    {item.perfil}
                                                </span>
                                            </td>

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
                                                        className="btn btn-sm btn-outline"
                                                        title="Editar"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </button>

                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        title="Excluir"
                                                    >
                                                        <i className="fas fa-trash"></i>
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

const PerfilPage = () => {
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

                            {perfilItems.map((item, index) => (

                                <form key={index} className="settings-section">

                                    <div className="form-group">
                                        <label>Nome Completo</label>
                                        <input
                                            type="text"
                                            value={item.nome}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            value={item.email}
                                            readOnly
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Telefone</label>
                                        <input
                                            type="text"
                                            value={item.telefone}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Função</label>
                                        <input
                                            type="text"
                                            value={item.funcao}
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

                            ))}

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

const NotificacoesPage = () => {
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
                  className={`notification-full ${
                    n.lida ? "" : "unread"
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

const ConfiguracoesPage = () => {
  const [user, setUser] = useState({
    nome: "João Pedro",
    especialidade: "Gestor Imobiliário",
    crm: "12345",
    email: "joao@email.com",
    senhaAtual: "",
    novaSenha: "",
    confirmarSenha: ""
  });

  const [settings, setSettings] = useState({
    darkMode: false,
    emailNotif: true,
    smsNotif: true
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSettingsChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const salvarPerfil = (e) => {
    e.preventDefault();
    console.log("Salvar perfil:", user);
  };

  const alterarSenha = (e) => {
    e.preventDefault();

    if (user.novaSenha !== user.confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }

    console.log("Senha alterada:", user);
  };

  return (
    <div id="configuracoes" className="page-content active">

      <div className="page-header">
        <h1>Configurações</h1>
        <p className="text-muted">Gerencie sua conta e preferências</p>
      </div>

      <div className="settings-container">

        {/* PERFIL */}
        <div className="card">
          <div className="card-header">
            <h2>Perfil Profissional</h2>
          </div>

          <div className="card-body">
            <form className="settings-section" onSubmit={salvarPerfil}>

              <div className="form-group">
                <label>Nome Completo</label>
                <input
                  type="text"
                  name="nome"
                  value={user.nome}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Especialidade</label>
                <input
                  type="text"
                  name="especialidade"
                  value={user.especialidade}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>CRM</label>
                <input
                  type="text"
                  name="crm"
                  value={user.crm}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={user.email}
                  readOnly
                />
              </div>

              <button className="btn btn-primary">
                Salvar Alterações
              </button>

            </form>
          </div>
        </div>

        {/* SEGURANÇA */}
        <div className="card">
          <div className="card-header">
            <h2>Segurança</h2>
          </div>

          <div className="card-body">
            <form className="settings-section" onSubmit={alterarSenha}>

              <div className="form-group">
                <label>Senha Atual</label>
                <input
                  type="password"
                  name="senhaAtual"
                  value={user.senhaAtual}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Nova Senha</label>
                <input
                  type="password"
                  name="novaSenha"
                  value={user.novaSenha}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>Confirmar Senha</label>
                <input
                  type="password"
                  name="confirmarSenha"
                  value={user.confirmarSenha}
                  onChange={handleChange}
                />
              </div>

              <button className="btn btn-primary">
                Alterar Senha
              </button>

            </form>
          </div>
        </div>

        {/* PREFERÊNCIAS */}
        <div className="card">
          <div className="card-header">
            <h2>Preferências</h2>
          </div>

          <div className="card-body">

            <div className="settings-item">
              <div>
                <p className="settings-label">Modo Escuro</p>
                <p className="text-muted">Ativar tema escuro automático</p>
              </div>

              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleSettingsChange}
              />
            </div>

            <hr />

            <div className="settings-item">
              <div>
                <p className="settings-label">Notificações por Email</p>
              </div>

              <input
                type="checkbox"
                name="emailNotif"
                checked={settings.emailNotif}
                onChange={handleSettingsChange}
              />
            </div>

            <hr />

            <div className="settings-item">
              <div>
                <p className="settings-label">Notificações por SMS</p>
              </div>

              <input
                type="checkbox"
                name="smsNotif"
                checked={settings.smsNotif}
                onChange={handleSettingsChange}
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

const SuportePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const [form, setForm] = useState({
    assunto: "",
    mensagem: ""
  });

  const faqs = [
    {
      id: 1,
      pergunta: "Como faço para adicionar um imóvel?",
      resposta:
        "Vá à seção Imóveis e clique em Novo Imóvel. Depois preencha os dados."
    },
    {
      id: 2,
      pergunta: "Como visualizo os imóveis disponíveis?",
      resposta:
        "Acesse a seção Imóveis e consulte a lista de propriedades disponíveis."
    },
    {
      id: 3,
      pergunta: "Como visualizar o histórico de um usuário?",
      resposta:
        "Vá à seção Usuários e selecione o perfil desejado."
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.assunto || !form.mensagem) {
      alert("Preenche todos os campos");
      return;
    }

    console.log("Mensagem enviada:", form);

    alert("Mensagem enviada com sucesso!");

    setForm({
      assunto: "",
      mensagem: ""
    });
  };

  return (
    <div id="suporte" className="page-content active">

      {/* HEADER */}
      <div className="page-header">
        <h1>Suporte e Ajuda</h1>
        <p className="text-muted">
          Centro de suporte do sistema de reservas de imóveis
        </p>
      </div>

      <div className="grid-2">

        {/* FAQ */}
        <div className="card">
          <div className="card-header">
            <h2>Perguntas Frequentes</h2>
          </div>

          <div className="card-body">
            <div className="faq-list">

              {faqs.map((faq) => (
                <div key={faq.id} className="faq-item">

                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    <span>{faq.pergunta}</span>
                    <i className="fas fa-chevron-down"></i>
                  </button>

                  {openFAQ === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.resposta}</p>
                    </div>
                  )}

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* CONTACTO */}
        <div className="card">
          <div className="card-header">
            <h2>Contato com Suporte</h2>
          </div>

          <div className="card-body">

            <form className="support-form" onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Assunto</label>
                <select
                  name="assunto"
                  value={form.assunto}
                  onChange={handleChange}
                >
                  <option value="">Selecione um assunto</option>
                  <option value="tecnico">Problema Técnico</option>
                  <option value="duvida">Dúvida sobre Funcionalidade</option>
                  <option value="bug">Reportar Bug</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label>Mensagem</label>
                <textarea
                  name="mensagem"
                  rows="6"
                  placeholder="Descreva seu problema ou dúvida..."
                  value={form.mensagem}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary w-full">
                Enviar Mensagem
              </button>

            </form>

            <hr />

            {/* INFO */}
            <div className="support-info">
              <h3>Informações de Contacto</h3>

              <p>
                <i className="fas fa-envelope"></i> suporte@homelife.com
              </p>

              <p>
                <i className="fas fa-phone"></i> (244) 948-679-436
              </p>

              <p>
                <i className="fas fa-clock"></i> Seg - Sex: 08:00 - 18:00
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminMain;