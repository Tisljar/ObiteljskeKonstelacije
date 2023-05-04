import './index.css';

const RadioniceDodatno = () => {
    const nacrt = require('../../assets/img/nacrt.png');
    return (
        <>
            <div className="row">
                <h2>Kako se pripremiti za radionicu</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <p>
                        Ukoliko do sada niste imali iskustvo s konstelacijama, vjerojatno imate potrebu dobiti neku
                        vrsta uputa kako se pripremiti za radionicu.
                        <br /> Najiskreniji i najpotpuniji odgovor bi bio: NIŠTA!
                        <br /> Iz najave radionice i iz informacija koje ste odprije imali, dobili ste podstrek da se
                        prijavite, spremnost da na stara pitanja dobijete odgovore na novi način. Time ste pokazali
                        otvorenost za ovaj, sistemski pogled na sebe i svoj obiteljski sustav. I to je za sada dovoljno.
                        <br /> Konstelacije su tiha metoda u kojoj se uvidi i odgovori čitaju iz tjelesnih reakcija na
                        podsvjesne upite i čežnje, otvaraju mogućnosti rješenja u tihom i dubokom dijalogu sa dušom,
                        onkraj buke uma i emocija.
                        <br /> Analiziranje i racionaliziranje, emocionalne akcije i reakcije mogu stvoriti ometanje u
                        kojoj se šapat duše može zagubiti.
                        <br /> Zato zadržite otvorenost prema novom, za početak je dovoljno.
                    </p>
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
                        <br /> Možete pokušati osjetiti na koje područje života najviše želite pogledati:
                        <br />
                        partnerstvo, odnos s djecom, odnos s roditeljima, simptome i/ili bolesti, osjećaje
                        nezadovoljstva u nekom dijelu života ili poslovna pitanja.
                        <br />
                        Konkretna pitanja ostavite da se uobliče tijekom radionice. <br /> Za one izrazito uporne,
                        predlažem nacrtati svoje obiteljsko stablo. U obitelji stablo pripadaju: <br />
                    </p>
                    <ul>
                        <li>partneri i djeca,</li>
                        <li> roditelji i braća i sestre partnera,</li>
                        <li>bake, djedovi, braća i sestre roditelja od partnera.</li>
                        <li>Djeca se crtaju redosljedom kojim su rođena, prvi ljevi simbol je za prvorođeno djete.</li>
                        <li>Nerođena djeca se crtaju iznad crte za vezu.</li>
                        <li>Prekinuta veza je važna prethodna veza u kojoj nije bilo djece.</li>
                        <li>
                            Svaka veza u kojoj je bilo djece ima jednaku važnost i isti simbol kao i partnerstvo u braku
                            kao imisti simbol za prekid.
                        </li>
                        <li>Izvan bračna veza je veza koja je istovremena sa brakom.</li>
                        <li>
                            Za prerano preminule se upisuje godina rođenja i smrti te uzrok smrti: rat, nasilna smrt,
                            bolest ili nesretni slučaj.
                        </li>
                    </ul>
                    <p>
                        Pitajte svoje roditelje o njihovoj mladosti i mladosti njihovih roditelja, pitajte ih kada i
                        kako su zaljubili, što im je bilo najljepše a što najteže. Podijelite i svoja iskustva sa svojom
                        djecom. Veselimo se zajedničkom druženju i <br /> vidimo se na radionici
                    </p>
                </div>
            </div>
        </>
    );
};

export default RadioniceDodatno;
