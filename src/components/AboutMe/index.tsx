import { Link } from 'react-router-dom';
import './index.css';

const AboutMe = () => {
    const ankicaJagnjic = require('../../assets/img/ankica-jagnjic.png');
    return (
        <>
            <div className="row">
                <h2>O meni</h2>
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
                            <br /> S konstelacijama se družim više od 15 godina, u početku za svoj osobni razvoj na
                            radionicama Michaela Scheffera. <br /> Edukaciju za sistemskog konstelatora pohađala sam i
                            završila kod Alemke i Maxa Dauskardta, iskusnih voditelja, školovanih u Australiji i
                            Njemačkoj kod Berta Hellingera i drugih. Dodatno sam se educirala na seminarima svjetski
                            poznatih konstelatora Stefana Hausnera, Cecilia Fernardez Regoja i Anngwyn St. Just.
                        </p>
                        <Link to={'/esabout'}>
                            <button className="btn-default mg-left">Pročitajte moje članke</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
