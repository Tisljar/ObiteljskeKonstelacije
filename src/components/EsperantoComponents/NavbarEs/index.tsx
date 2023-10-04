import './index.css';
import { Link } from 'react-router-dom';

const NavbarEs = () => {
    const logoWhite = require('../../../assets/img/Logo-white.png');
    const croatianFlag = require('../../../assets/img/Croatian-Flag.png');
    return (
        <section className="top-nav">
            <Link to={'/es'}>
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
                    <Link to={'/esabout'} className="link">
                        Pli mi
                    </Link>
                </li>

                <li>
                    <Link to={'/eskonstalacije'} className="link">
                        Familiaj Konstalacioj
                    </Link>
                </li>
                <li>
                    <Link to={'/esradionice'} className="link">
                        Sesijoj
                    </Link>
                </li>
                <li>
                    <Link to={'/eslinkovi'} className="link">
                        Video kaj ligiloj
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <img src={croatianFlag} alt="" className="logo" />
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default NavbarEs;
