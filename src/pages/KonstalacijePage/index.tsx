import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ObiteljskeKonstalacije from '../../components/ObiteljskeKonstalacije';
import './index.css';

const KonstalacijePage = () => {
    return (
        <div className="page">
            <header>
                <Navbar />
            </header>
            <main>
                <div className="flex-container">
                    <ObiteljskeKonstalacije />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default KonstalacijePage;
