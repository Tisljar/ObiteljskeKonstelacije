import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import MojiČlanci from '../../components/MojiČlanci';
import Navbar from '../../components/Navbar';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
                    <AboutMe />
                    <MojiČlanci />
                    <MojiČlanci />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AboutPage;
