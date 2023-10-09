import './index.css';

import FooterEs from '../../../components/EsperantoComponents/FooterEs';
import NavbarEs from '../../../components/EsperantoComponents/NavbarEs';
import LinkoviProširenoEs from '../../../components/EsperantoComponents/LinkoviProširenoEs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LinkoviPageEs = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);
    return (
        <div className="page">
            <header>
                <NavbarEs />
            </header>
            <main>
                <div className="flex-container">
                    <LinkoviProširenoEs />
                </div>
            </main>
            <footer>
                <FooterEs />
            </footer>
        </div>
    );
};

export default LinkoviPageEs;
