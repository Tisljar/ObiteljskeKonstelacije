import './index.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let mobileLinks = 'ul-mobile';
    const displayMobile = () => {
        if (mobileLinks === 'ul-mobile') {
            mobileLinks = 'clicked';
            console.log('clicked');
        } else if (mobileLinks === 'clicked') {
            mobileLinks = 'ul-mobile';
            console.log('mob');
        }
        console.log('hmmm');
        return;
    };
    return (
        <div className="flex-container">
            <div className="row reverse">
                <div className="navbar-items">
                    <ul className="ul-nav">
                        <Link to="/About">
                            <li>Moji članci</li>
                        </Link>
                        <li>Obiteljske konstalacije</li>
                        <li>Radionice i susreti</li>
                        <li>Korisni linkovi</li>
                        <li>Članci</li>
                    </ul>
                </div>
                <div className="mobile-nav">
                    <p onClick={displayMobile}>Nešto</p>
                    <ul className={mobileLinks}>
                        <li>
                            <Link to="/About">Moji članci</Link>
                        </li>
                        <li>Obiteljske konstalacije</li>
                        <li>Radionice i susreti</li>
                        <li>Korisni linkovi</li>
                    </ul>
                </div>
                <div>
                    <Link to="/">
                        <ul className="ul-nav">
                            <li>Logo</li>
                        </ul>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
