import { Link } from 'react-router-dom';
import './index.css';

const ObiteljskeKonstalacijeEs = () => {
    const obiteljskeKonstalacije = require('../../../assets/img/ObiteljskeKonstalacijeFraktal.png');
    return (
        <>
            <div className="row">
                <div className="col-md-12 col-td-6 col-7">
                    <h2>Kio estas familiaj konstelacioj?</h2>
                    <p>
                        Bert Hellinger, la fondinto de la metodo de familiaj aŭ sistemaj konstelacioj, sukcese aplikis
                        kaj kombinis la principojn de psikologio kaj spiriteco kaj disponigis pli profundan komprenon
                        pri la kompleksaj sistemoj de interhomaj rilatoj.
                    </p>
                    <p>
                        La baza premiso de ĉi tiu metodo estas, ke en la familio ekzistas reguloj de amo, kaj kiam ili
                        estas respektataj la fluon de amo kaj vivenergio atingas kaj fortigas ĉiujn membrojn de la
                        familio. Same validas en ĉiuj aliaj sistemoj/grupoj al kiuj ni apartenas. Kiam ĉiuj membroj
                        havas senton de aparteno kaj kiam ĉiuj membroj respektas ordon de la sistemo, la vivo
                        disvolviĝas al sia plena potenco.
                    </p>
                    <p>
                        Farante familian poziciigadon, vi ekkomprenos kial io okazis ĝis nun kaj kiel preni saĝon kaj
                        forton de la pasinteco por atingi siajn celojn en la estonteco.
                    </p>
                    <p>Ĉi tiu metodo estas plej ofte aplikata en grupa laboro, sed ankaŭ eblas individua laboro.</p>
                    <Link to={'/eokonstalacije'}>
                        <button className="md-padding-bottom btn-default">Eksciu plu</button>
                    </Link>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-5 col-4 stablo mg-top-80">
                    <img
                        src={obiteljskeKonstalacije}
                        alt="Fraktal"
                        title="Fraktali su povezani zato i zato"
                        className="fraktal"
                    />
                    <p className="img-description">
                        Fraktaloj estas geometriaj objektoj kiuj estas sinsimilaj, konsistante el reduktitaj versioj de
                        si mem. Simile estas kun familioj: ĉiu familio estas kunmetita de siaj membroj, kaj ĉiu persono
                        estas reduktita bildo de sia familio.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ObiteljskeKonstalacijeEs;
