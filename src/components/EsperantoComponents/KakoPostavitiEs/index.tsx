const KakoPostavitiEs = () => {
    const nacrt = require('../../../assets/img/nacrt.png');
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h2>Kiel prepariĝi?</h2>
                    <p>
                        Demandu vin mem en kiun parto de via vivo vi volas rigardi: partnereco, rilato kun infanoj,
                        rilato kun gepatroj, ripetantaj situacioj, nekompreneblaj kaj nekontroleblajn emociojn kaj
                        reagoj, simptomoj kaj/aŭ malsanoj, sentoj de malkontento en iu parto de vivo aŭ komercaj aferoj.
                        <br />
                        Lasu la specifajn demandojn formiĝi dum la laborrenkontiĝo.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <p>
                        Por tiuj, kiuj estas ekstreme persistaj, mi sugestas desegni vian genealogian arbon:
                        <br />
                    </p>
                    <ul>
                        <li>partnero/ino kaj infanoj,</li>
                        <li>gepatroj kaj gefratoj, iliaj gefratoj</li>
                        <li>geavoj</li>
                        <li>
                            Infanoj estas desegnitaj en la ordo en kiu ili naskiĝis, la unua maldekstra simbolo estas
                            por la unue naskita infano.
                        </li>
                        <li>Nenaskitaj infanoj estas tiritaj super la kunliga linio.</li>
                        <li>Rompita rilato, grava antaŭa rilato</li>
                        <li>
                            Ĉiu rilato, en kiu estis infanoj havas la saman gravecon kaj la saman simbolon, kaj por la
                            rilato kaj por la rompo.
                        </li>
                        <li>Ekstergeedza rilato samtempa kun geedziĝa.</li>
                        <li>
                            Por la antaŭtempe mortintoj, la naskiĝjaro kaj morto kaj la mortokaŭzo estes enmetitaj:
                            milito, perforta morto, malsano aŭ akcidento.
                        </li>
                    </ul>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-5 col-5  nacrt-center">
                    <div>
                        <img src={nacrt} alt="" className="nacrt" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>
                        Krome, demandu viajn gepatrojn pri ilia juneco kaj la juneco de iliaj gepatroj, demandu ilin
                        kiam kaj kiel ili enamiĝis, kio estis la plej bela kaj la plej malfacila afero por ili. <br />
                        Parolu pri via vivo kaj spertoj kun viaj infanoj. Ni antaŭĝojas pasigi tempon kune kaj ĝis
                        revido en la laborrenkontiĝo.
                    </p>
                </div>
            </div>
        </>
    );
};

export default KakoPostavitiEs;
