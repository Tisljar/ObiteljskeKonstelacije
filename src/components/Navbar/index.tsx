import './index.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="flex-container">
                <div className="row reverse">
                    <div className="navbar-items">
                        <ul className="ul-nav">
                            <li>O Meni</li>
                            <li>Obiteljske konstalacije</li>
                            <li>Radionice i susreti</li>
                            <li>Korisni linkovi</li>
                            <li>Članci</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
