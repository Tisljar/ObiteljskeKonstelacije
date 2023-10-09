import { Link } from 'react-router-dom';
import './index.css';

const AboutMeEs = () => {
    const ankicaJagnjic = require('../../../assets/img/ankica-jagnjic.png');
    return (
        <>
            <div className="row">
                <h2>Pri mi</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-5 col-4">
                    <div className="image-wrapper mg-center">
                        <img src={ankicaJagnjic} alt="" />
                    </div>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-6 col-7">
                    <div className="about-content">
                        <p>
                            Ankica Jagnjić
                            <br /> Mi uzas konstelacian manieron dum pli ol 20 jaroj, komence por mia persona evoluo ĉe
                            la grupa laboro de Michael Scheffer.
                            <br /> Mi kompletigis la sisteman konstelacian edukadon kun Alemka kaj Max Dauskardt,
                            spertaj gvidantoj, edukita en Aŭstralio kaj Germanio de Bert Hellinger kaj aliaj. Mi estis
                            krome edukita ĉe la seminarioj de la mondfamaj konstelantoj Stefan Hausner, Cecilia
                            Fernardez Regoj kaj Angwyn St. Nur.
                        </p>
                        <Link to={'/about'}>
                            <button className="btn-default mg-left">Legu miajn artikolojn</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMeEs;
