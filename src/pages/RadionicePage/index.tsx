import EmailMe from '../../components/EmailMe';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import RadioniceDodatno from '../../components/RadioniceDodatno';
import './index.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const RadionicePage = () => {
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
                    <RadioniceDodatno />
                    <EmailMe />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RadionicePage;
