import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <section className="top-nav">
            <Link to={'/'}>
                <div>Logo</div>
            </Link>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-button-container">
                <div className="menu-button"></div>
            </label>
            <ul className="menu">
                <li>
                    <Link to={'/about'} className="link">
                        Moji članci
                    </Link>
                </li>

                <li>
                    <Link to={'/konstalacije'} className="link">
                        Obiteljske konstalacije
                    </Link>
                </li>
                <li>
                    <Link to={'/radionice'} className="link">
                        Radionice i susreti
                    </Link>
                </li>
                <li>
                    <Link to={'/linkovi'} className="link">
                        Korisni linkovi
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default Navbar;
