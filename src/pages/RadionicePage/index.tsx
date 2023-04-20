import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Radionice from '../../components/Radionice';
import './index.css';

const RadionicePage = () => {
    return (
        <div className="page">
            <header>
                <Navbar />
            </header>
            <main>
                <div className="flex-container">
                    <Radionice />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default RadionicePage;
