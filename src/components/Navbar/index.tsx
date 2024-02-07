import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const logoWhite = require('../../assets/img/Logo-white.png');
    const esperantoFlag = require('../../assets/img/Esperanto-flago.png');
    return (
        <section className="top-nav">
            <Link to={'/'}>
                <div>
                    <img src={logoWhite} alt="" className="logo" />
                </div>
            </Link>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-button-container">
                <div className="menu-button"></div>
            </label>
            <ul className="menu">
                <li>
                    <Link to={'/konstalacije'} className="link">
                        Obiteljske konstelacije
                    </Link>
                </li>
                <li>
                    <Link to={'/radionice'} className="link">
                        Radionice i susreti
                    </Link>
                </li>
                <li>
                    <Link to={'/about'} className="link">
                        O Meni
                    </Link>
                </li>
                <li>
                    <Link to={'/linkovi'} className="link">
                        Korisni linkovi
                    </Link>
                </li>
                <li>
                    <Link to={'/eo'}>
                        <img src={esperantoFlag} alt="" className="flag" />
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Navbar;
