import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Accordion from '../../components/Accordion';
import AboutMeNoBtn from '../../components/AboutMeNoBtn';
import AboutArticles from '../../components/AboutArticles';

const AboutPage = () => {
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
                    <AboutMeNoBtn />
                    <AboutArticles />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AboutPage;
