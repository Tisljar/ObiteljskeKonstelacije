import './index.css';

const OKonstalacijamaEs = () => {
    const obiteljskeKonstalacije = require('../../../assets/img/ObiteljskeKonstalacijeFraktal.png');
    return (
        <>
            <div className="row">
                <h2>Kio estas familiaj konstelacioj?</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-7">
                    <p>
                        Bert Hellinger, la fondinto de la metodo de familiaj aŭ sistemaj konstelacioj, sukcese aplikis
                        kaj kombinis la principojn de psikologio kaj spiriteco kaj disponigis pli profundan komprenon
                        pri la kompleksaj sistemoj de interhomaj rilatoj.
                    </p>
                    <p>
                        La baza premiso de ĉi tiu metodo estas, ke en la familio ekzistas reguloj de amo, kaj kiam ili
                        estas respektataj, la fluo de amo kaj vivenergio atingas kaj fortigas ĉiujn membrojn de la
                        familio. Same validas en ĉiuj aliaj sistemoj/grupoj al kiuj ni apartenas. Kiam ĉiuj membroj
                        havas senton de aparteno kaj kiam ĉiuj membroj respektas ordon de la sistemo, la vivo
                        disvolviĝas al sia plena potenco.
                    </p>
                    <p>
                        Tamen, iuj eventoj povas provizore interrompi la ordon de amo. Resaniĝo de la traŭmato de la
                        sistemo kaj traŭmoj de la familio okazas tra emociaj procezoj de la membroj, foje tra pluraj
                        generacioj.
                    </p>
                    <p>
                        Kvankam ni ne ĉiam konscias pri tio, niaj pragepatroj vivas en ni kaj tra ni: iliaj saĝeco,
                        sperto kaj sufero. Dum niaj pragepatroj suferas en ni, ni ne povas esti vere feliĉaj.
                    </p>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-5 col-4 stablo">
                    <img src={obiteljskeKonstalacije} alt="" className="fraktal" />
                    <p className="img-description">
                        Fraktaloj estas geometriaj objektoj kiuj estas sinsimilaj, konsistante el reduktitaj versioj de
                        si mem. Simile estas kun familioj: ĉiu familio estas kunmetita de siaj membroj, kaj ĉiu persono
                        estas reduktita bildo de sia familio.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>
                        Tial ni foje havas la senton, ke la vivo ne iras kiel ni volas malgraŭ niaj klopodoj ŝanĝi aŭ
                        ŝanĝiĝi, ke la sukceso eskapas nin. Malgraŭ la perzisto, matureco kaj sindediĉo, ni ne sukcesas
                        liberigi nin de la ripetado de samaj kondutoj kaj reagoj. Ni estas malkontentaj pri familiaj
                        rilatoj, pri niaj partneraj kaj rilatoj kun infanoj, ni ne sukcesas atingi signifajn kaj
                        produktivajn rilatojn kun aliaj homoj, de nia konduto ni ne sukcesas forigi antaŭjuĝojn kaj
                        prijuĝojn, la bezonon regi/kontroli, sentojn de kulpo kiuj ŝajnas veni de nenie, diversaj
                        simptomoj kaj malsanoj malhelpas niajn vivojn.
                    </p>
                    <p>
                        Kaj la fonto kaj solvo de niaj problemoj ofte venas de la pasinteco de la familio aŭ sistemo al
                        kiu ni apartenas. Dum ni restas kaptitaj en la ŝarĝoj kaj doloroj de antaŭuloj, ni estas
                        destinitaj ripeti hereditajn traŭmatojn.
                    </p>
                    <p>Kaj ĉiu tia implikiĝo baras la fluo de vivenergio, tenas nin en eterna ripetado.</p>
                </div>
            </div>
        </>
    );
};

export default OKonstalacijamaEs;
