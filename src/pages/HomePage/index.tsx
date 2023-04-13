import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import Linkovi from '../../components/Linkovi';
import Navbar from '../../components/Navbar';
import ObiteljskeKonstalacije from '../../components/ObiteljskeKonstalacije';
import Radionice from '../../components/Radionice';

const HomePage = () => {
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
