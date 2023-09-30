import EmailMeEs from '../../../components/EsperantoComponents/EmailMeEs';
import FooterEs from '../../../components/EsperantoComponents/FooterEs';
import NavbarEs from '../../../components/EsperantoComponents/NavbarEs';
import RadioniceDodatnoEs from '../../../components/EsperantoComponents/RadioniceDodatnoEs';
import './index.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import RazrjesenjeEs from '../../../components/EsperantoComponents/RazrjesenjeEs';
import KakoPostavitiEs from '../../../components/EsperantoComponents/KakoPostavitiEs';
import KakoOdabratiEs from '../../../components/EsperantoComponents/KakoOdabratiEs';
import TerminiEs from '../../../components/EsperantoComponents/TerminiEs';

const RadionicePageEs = () => {
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
                    <TerminiEs />
                    <KakoOdabratiEs />
                    <RazrjesenjeEs />
                    <RadioniceDodatnoEs />
                    <KakoPostavitiEs />
                    <EmailMeEs />
                </div>
            </main>
            <footer>
                <FooterEs />
            </footer>
        </div>
    );
};

export default RadionicePageEs;
