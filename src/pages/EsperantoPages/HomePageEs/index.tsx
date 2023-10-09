import AboutMeEs from '../../../components/EsperantoComponents/AboutMeEs';
import FooterEs from '../../../components/EsperantoComponents/FooterEs';
import LinkoviEs from '../../../components/EsperantoComponents/LinkoviEs';
import NavbarEs from '../../../components/EsperantoComponents/NavbarEs';
import ObiteljskeKonstalacijeEs from '../../../components/EsperantoComponents/ObiteljskeKonstalacijeEs';
import RadioniceEs from '../../../components/EsperantoComponents/RadioniceEs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import EmailMeEs from '../../../components/EsperantoComponents/EmailMeEs';

const HomePageEs = () => {
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
                    <ObiteljskeKonstalacijeEs />
                    <AboutMeEs />
                    <RadioniceEs />
                    <EmailMeEs />
                    <LinkoviEs />
                </div>
            </main>
            <footer>
                <FooterEs />
            </footer>
        </div>
    );
};

export default HomePageEs;
