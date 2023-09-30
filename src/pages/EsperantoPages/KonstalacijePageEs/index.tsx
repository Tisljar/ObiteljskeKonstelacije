import FooterEs from '../../../components/EsperantoComponents/FooterEs';
import NavbarEs from '../../../components/EsperantoComponents/NavbarEs';
import OKonstalacijamaEs from '../../../components/EsperantoComponents/OKonstalacijamaEs';
import './index.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VrsteKonstalacijaEs from '../../../components/EsperantoComponents/VrsteKonstalacijaEs';
import AccordionEs from '../../../components/EsperantoComponents/AccordionEs';

const KonstalacijePageEs = () => {
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
                    <OKonstalacijamaEs />
                    <AccordionEs />
                    <VrsteKonstalacijaEs />
                </div>
            </main>
            <footer>
                <FooterEs />
            </footer>
        </div>
    );
};

export default KonstalacijePageEs;
