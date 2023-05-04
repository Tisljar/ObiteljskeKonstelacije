import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import Linkovi from '../../components/Linkovi';
import Navbar from '../../components/Navbar';
import ObiteljskeKonstalacije from '../../components/ObiteljskeKonstalacije';
import Radionice from '../../components/Radionice';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
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
                    <ObiteljskeKonstalacije />
                    <AboutMe />
                    <Radionice />
                    <Linkovi />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;
