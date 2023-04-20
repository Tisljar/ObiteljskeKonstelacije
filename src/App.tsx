import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage';
import KonstalacijePage from './pages/KonstalacijePage';
import LinkoviPage from './pages/LinkoviPage';
import RadionicePage from './pages/RadionicePage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/konstalacije" element={<KonstalacijePage />} />
            <Route path="/radionice" element={<RadionicePage />} />
            <Route path="/linkovi" element={<LinkoviPage />} />
        </Routes>
    );
};

export default App;

