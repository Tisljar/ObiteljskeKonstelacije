import './index.css';
import { Link } from 'react-router-dom';

const NavbarEs = () => {
    const logoWhite = require('../../../assets/img/Logo-white.png');
    const croatianFlag = require('../../../assets/img/Croatian-Flag.png');
    return (
        <section className="top-nav">
            <Link to={'/eo'}>
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
                    <Link to={'/eoabout'} className="link">
                        Pri mi
                    </Link>
                </li>

                <li>
                    <Link to={'/eokonstalacije'} className="link">
                        Familiaj Konstalacioj
                    </Link>
                </li>
                <li>
                    <Link to={'/eoradionice'} className="link">
                        Sesioj
                    </Link>
                </li>
                <li>
                    <Link to={'/eolinkovi'} className="link">
                        Video kaj ligiloj
                    </Link>
                </li>
                <li>
                    <Link to={'/'}>
                        <img src={croatianFlag} alt="" className="flag" />
                    </Link>
                </li>
            </ul>
        </section>
    );
};

export default NavbarEs;
