import './index.css';

const AboutMe = () => {
    const ankicaJagnjic = require('../../assets/img/ankica-jagnjic.png');
    return (
        <>
            <div className="row">
                <h1>O meni</h1>
            </div>
            <div className="row">
                <div className="col-4">
                    <div className="image-wrapper mg-center">
                        <img src={ankicaJagnjic} alt="" />
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                    <div className="about-content">
                        <p>
                            Ankica Jagnjić s konstelacijama se druži više od 10 godina, u početku za svoj osobni razvoj
                            na radionicama Michaela Scheffera. Edukaciju za sistemskog konstelatora pohađala je i
                            završila kod Alemke i Maxa Dauskardta, iskusnih voditelja, školovanih u Australiji i
                            Njemačkoj kod Berta Hellingera i drugih. Dodatno se educirala na seminarima svjetski
                            poznatih konstelatora Stefana Hausnera, Cecilia Fernardez Regoja i Anngwyn St. Just.
                        </p>
                        <button className="btn-default">Pročitajte moje članke</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMe;
