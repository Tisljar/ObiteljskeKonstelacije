import './index.css';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import LinkoviProšireno from '../../components/LinkoviProšireno';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LinkoviPage = () => {
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
                    <LinkoviProšireno />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LinkoviPage;
