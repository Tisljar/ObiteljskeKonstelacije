import EmailMe from '../../components/EmailMe';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import RadioniceDodatno from '../../components/RadioniceDodatno';
import './index.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Razrjesenje from '../../components/Razrjesenje';
import KakoPostaviti from '../../components/KakoPostaviti';
import KakoOdabrati from '../../components/KakoOdabrati';
import Termini from '../../components/Termini';

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
                    <Termini />
                    <KakoOdabrati />
                    <Razrjesenje />
                    <RadioniceDodatno />
                    <KakoPostaviti />
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
