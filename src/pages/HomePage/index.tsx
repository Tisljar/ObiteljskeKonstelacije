import AboutMe from '../../components/AboutMe';
import Colors from '../../components/Colors';
import Linkovi from '../../components/Linkovi';
import Navbar from '../../components/Navbar';
import ObiteljskeKonstalacije from '../../components/ObiteljskeKonstalacije';
import Radionice from '../../components/Radionice';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex-container">
                <ObiteljskeKonstalacije />
                <Radionice />
                <Linkovi />
                <AboutMe />
            </div>
        </div>
    );
};

export default HomePage;
