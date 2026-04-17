import '../css/ProductDescription.css';
import home from '../assets/home.png';
import { Building2, Package, CalendarDays, MessageSquare, Bell, Settings } from 'lucide-react';

function ProductDescription() {
    return (
        <aside id='ProductDescription' className='sideba'>
            <div className="">
                <img src={home} className="stat-icon blue" />
                <div className="stat-content">
                    <p className="stat-label">Visita Hoje</p>
                    <h3 className="stat-value">12</h3>
                    <span className="stat-change positive">↑ 2 a mais que ontem</span>
                </div>
                <button className="button-exit">Comprar</button>
            </div>
        </aside>
    )
}

export default ProductDescription;