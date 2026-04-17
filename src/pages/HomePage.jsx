import '../css/App.css'
import person from "../assets/person.png"
import logo from "../assets/logo.png"
import flet from "../assets/flet.png"

const HomePage = () => {
    return (
        <section className="main">
            <nav className="navmain">
                <div>
                    <button aria-label="Menu" className="menu-button">&#9776;</button>
                    <a href="#"><img src={logo} alt="logo homelife" className="logo logo-img" /></a>
                </div>
                <Link to="/cliente"><img src={person} alt="" className="logo profile-img" /></Link>
            </nav>

            <header>
                <div className="hero-img">
                    <div className="produto-content">
                        <h2 className="title">Johnn's Eduard Home</h2>
                        <p className="citation">Onde a noite é mais romántica</p>
                        <div className="content">
                            <div className="price container">
                                <a className='icon'></a>
                                <p className="price">Preço: Kz 20.000.000</p>
                            </div>

                            <div className="renda container">
                                <a className='icon'></a>
                                <p className="renda">De 3 a 3 meses</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section>
                <nav className="navbar">
                    <ul>
                        <li className="t-mobilia">
                            <label htmlFor="casa"><input type="radio" name="tipo" id="casa" /><p>Casas</p></label>
                        </li>
                        <li className="t-mobilia">
                            <label htmlFor="apartamento" className='desable'><input type="radio" name="tipo" id="apartamento" /><p>Apartamentos</p></label>
                        </li>
                        <li className="t-mobilia">
                            <label htmlFor="cormecial" className='desable'><input type="radio" name="tipo" id="cormecial" /><p>Comerciais</p></label>
                        </li>
                        <li className="t-mobilia">
                            <label htmlFor="rural" className='desable'><input type="radio" name="tipo" id="rural" /><p>Rurais</p></label>
                        </li>
                    </ul>
                </nav>
                <section>
                    <div className='item'>
                        <div>
                            <img src={flet} alt="Robet's home is an apartament of 5 rooms and a garage." />
                            <div className='item-content'>
                                <h3 className="title">Robert's Home</h3>
                                <p>Category .  $$ . 3 meses . 4 requests</p>
                            </div>
                        </div>
                        <div>
                            <div className="stars">
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                            </div>
                            <button className="heart">&#40000;</button>
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <img src={flet} alt="Robet's home is an apartament of 5 rooms and a garage." />
                            <div className='item-content'>
                                <h3 className="title">Robert's Home</h3>
                                <p>Category .  $$ . 3 meses . 4 requests</p>
                            </div>
                        </div>
                        <div>
                            <div className="stars">
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                            </div>
                            <button className="heart">&#40000;</button>
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <img src={flet} alt="Robet's home is an apartament of 5 rooms and a garage." />
                            <div className='item-content'>
                                <h3 className="title">Robert's Home</h3>
                                <p>Category .  $$ . 3 meses . 4 requests</p>
                            </div>
                        </div>
                        <div>
                            <div className="stars">
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                            </div>
                            <button className="heart">&#40000;</button>
                        </div>
                    </div>
                    <div className='item'>
                        <div>
                            <img src={flet} alt="Robet's home is an apartament of 5 rooms and a garage." />
                            <div className='item-content'>
                                <h3 className="title">Robert's Home</h3>
                                <p>Category .  $$ . 3 meses . 4 requests</p>
                            </div>
                        </div>
                        <div>
                            <div className="stars">
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                                <img src="" alt="" className="star" />
                            </div>
                            <button className="heart">&#40000;</button>
                        </div>
                    </div>
                </section>
            </section>
            <section className="contacto">
                <h3>Quer receber notificações sobre os movéis mais recentes?</h3>

                <p>Receba contéudos, dicas, nóticias, </p>
            </section>
            <footer className="py-12 border-t border-slate-200 text-center text-slate-500 text-sm">
                <p>&copy; 2026 BiznoPay. Todos os direitos reservados. CNPJ: 00.000.000/0001-00</p>
            </footer>

        </section>
    )
}

export default HomePage;
