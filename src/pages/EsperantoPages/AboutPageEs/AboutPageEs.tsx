import FooterEs from '../../../components/EsperantoComponents/FooterEs';
import NavbarEs from '../../../components/EsperantoComponents/NavbarEs';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AboutArticlesEs from '../../../components/EsperantoComponents/AboutArticlesEs';
import AboutMeNoBtnEs from '../../../components/EsperantoComponents/AboutMeNoBtnEs';

const AboutPageEs = () => {
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
                    <AboutMeNoBtnEs />
                    <AboutArticlesEs />
                </div>
            </main>
            <footer>
                <FooterEs />
            </footer>
        </div>
    );
};

export default AboutPageEs;
