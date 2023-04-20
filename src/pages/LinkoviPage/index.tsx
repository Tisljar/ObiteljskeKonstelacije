import './index.css';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Linkovi from '../../components/Linkovi';

const LinkoviPage = () => {
    return (
        <div className="page">
            <header>
                <Navbar />
            </header>
            <main>
                <div className="flex-container">
                    <Linkovi />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default LinkoviPage;
