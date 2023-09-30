import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '../../../components/Accordion';
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
                <Navbar />
            </header>
            <main>
                <div className="flex-container">
                    <AboutMeNoBtnEs />
                    <AboutArticlesEs />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AboutPageEs;
