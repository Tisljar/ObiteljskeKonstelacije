import { Link } from 'react-router-dom';
import './index.css';

const RadioniceEs = () => {
    const nacrt = require('../../../assets/img/nacrt.png');
    return (
        <>
            <div className="row">
                <h2>Grupaj kaj individuaj sesioj</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <p>
                        Se vi antaŭe ne havis sperton kun konstelacioj, vi verŝajne esperas havi instrukcion kiel
                        prepariĝi por la laboro.
                        <br /> La plej honesta kaj kompleta respondo estas: FARU NENION!
                        <br /> De la anonco de la laborrenkontiĝo kaj de la informoj, kiujn vi havis antaŭe, vi ricevis
                        instigon aliĝi, volon ricevi respondojn al malnovaj demandoj per la nova maniero. Farante tion,
                        vi montris malfermitecon al ĉi tiu sistema vidpunkto pri vi mem kaj via familia sistemo. Kaj tio
                        sufiĉas por komenco.
                        <br />
                        Konstelacioj estas silenta metodo, en kiu oni legas komprenojn kaj respondojn el la reagoj de la
                        korpo pri la subkonsciaj demandoj kaj sopiroj, ili malfermas eblecojn por solvoj en silenta kaj
                        profunda dialogo kun la animo, preter la bruo de la menso kaj emocioj. Analizi kaj raciigi,
                        emociaj agoj kaj reagoj povas krei distraĵojn, en kiuj la flustroj de la animo povas perdiĝi.
                    </p>
                    <p>
                        Do konservu vian malfermitecon al la nova, tio sufiĉas por komenci. Se vi volas studi plian
                        materialon antaŭ la laborrenkontiĝo, vi povas ekscii pli:
                    </p>
                    <Link to={'/eoradionice'}>
                        <button className="btn-default">Eksciu pli</button>
                    </Link>
                </div>
                <div className="col-md-12 col-td-6 col-6  nacrt-center">
                    <div>
                        <img src={nacrt} alt="" className="nacrt" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RadioniceEs;
