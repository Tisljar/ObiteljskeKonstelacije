import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage';
import KonstalacijePage from './pages/KonstalacijePage';
import LinkoviPage from './pages/LinkoviPage';
import RadionicePage from './pages/RadionicePage';
import AboutPageEs from './pages/EsperantoPages/AboutPageEs/AboutPageEs';
import HomePageEs from './pages/EsperantoPages/HomePageEs';
import KonstalacijePageEs from './pages/EsperantoPages/KonstalacijePageEs';
import RadionicePageEs from './pages/EsperantoPages/RadionicePageEs';
import LinkoviPageEs from './pages/EsperantoPages/LinkoviPageEs';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/konstalacije" element={<KonstalacijePage />} />
            <Route path="/radionice" element={<RadionicePage />} />
            <Route path="/linkovi" element={<LinkoviPage />} />
            <Route path="/eoabout" element={<AboutPageEs />} />
            <Route path="/eo" element={<HomePageEs />} />
            <Route path="/eokonstalacije" element={<KonstalacijePageEs />} />
            <Route path="/eoradionice" element={<RadionicePageEs />} />
            <Route path="/eolinkovi" element={<LinkoviPageEs />} />
        </Routes>
    );
};

export default App;
