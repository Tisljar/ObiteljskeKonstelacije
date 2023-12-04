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
                            <br /> Mi ĝuas konstelacian manieron dum pli ol 20 jaroj, komence por mia persona evoluo ĉe
                            la grupa laboro de Michael Scheffer kaj dum lastaj 7 jarojn mem gvidante poziciigadon laŭ
                            tiu metodo.
                            <br /> Mi kompletigis la edukadon kun Alemka kaj Max Dauskardt, spertaj gvidantoj, edukita
                            de Bert Hellinger. Mi estis krome edukita ĉe la kurso Cecilia Fernardez Regoj kaj la
                            seminarioj de Stefan Hausner.
                        </p>
                        <Link to={'/eoabout'}>
                            <button className="btn-default mg-left">Legu miajn artikolojn</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMeEs;
