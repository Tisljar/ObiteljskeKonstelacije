import AboutMe from '../../components/AboutMe';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const AboutPage = () => {
    return (
        <div className="page">
            <header>
                <Navbar />
            </header>
            <main>
                <div className="flex-container">
                    <AboutMe />
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default AboutPage;
