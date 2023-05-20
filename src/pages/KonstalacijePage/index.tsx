import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import OKonstalacijama from '../../components/OKonstalacijama';
import './index.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import VrsteKonstalacija from '../../components/VrsteKonstalacija';
import Accordion from '../../components/Accordion';

const KonstalacijePage = () => {
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
                    <OKonstalacijama />
                    <Accordion />
                    <VrsteKonstalacija />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default KonstalacijePage;
