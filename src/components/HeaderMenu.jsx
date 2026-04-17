
export default function HeaderMenu() {
    return (
        <>
            <header className="top-bar">
                <div className="top-bar-left">
                    <button className="menu-toggle" id="menuToggle">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="breadcrumb" id="breadcrumb">
                        Dashboard
                    </div>
                </div>

                <div className="top-bar-right">
                    <div className="notification-bell">
                        <button id="notificationBtn" className="bell-btn">
                            <i className="fas fa-bell"></i>
                            <span className="notification-badge" id="notificationBadge">3</span>
                        </button>
                    </div>

                    <div className="theme-toggle">
                        <button id="themeToggle" className="theme-btn">
                            <i className="fas fa-moon"></i>
                        </button>
                    </div>

                    <div className="user-menu">
                        <img src={"https://i.pravatar.cc/40?img=1"} alt="Perfil" className="user-avatar" />
                        <div className="user-info">
                            <span className="user-name">Manassés Tano</span>
                        </div>
                        <button className="user-menu-btn" id="userMenuBtn">
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className="dropdown-menu" id="userDropdown">
                            <button to="/" className="dropdown-item"><i className="fas fa-user"></i> Perfil</button>
                            <button to="/" className="dropdown-item"><i className="fas fa-key"></i> Alterar Senha</button>
                            <hr />
                            <button to="/" className="dropdown-item logout"><i className="fas fa-sign-out-alt"></i>
                                Sair</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};