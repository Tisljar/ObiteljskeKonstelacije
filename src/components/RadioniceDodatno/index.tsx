import './index.css';

const RadioniceDodatno = () => {
    const nacrt = require('../../assets/img/nacrt.png');
    return (
        <>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <h2>Postavljanje konstelacija</h2>
                    <p>
                        Rad se može postaviti grupno ili individualno.
                        <br /> Radom u grupi dobijete energetsku i emocionalnu podršku drugih sudionika, dobijete
                        priliku učestvovati ili samo promatrati radove drugih sudionika u kojima možete dobiti snažne i
                        važne uvide
                    </p>
                    <p>
                        Kroz individualni rad dobijete mirniji i intimniji prostor za rad. Za sve koji se boje ili ne
                        mogu otvoriti prema grupi, individualni rad je dobar odabir Rad se može postaviti uživo ili
                        on-line.
                        <br /> Bez obzira KAKO postavljate rad, najvažnije za uspjeh rada je JASNA UNUTARNJA NAMJERA i
                        volja za promjenom.
                    </p>
                    <p>
                        Ponekad nam to dođe kao osjećaj „već mi je ovoga dosta“, ponekad „ne želim ovu bol“ ili „vrijeme
                        je za promjene“ ili „umorna sam od pokušaja! Ili… Bez obzira kako se namjera uobliči, opustite
                        misli, otvorite srce, otvorite se prema onom što može doći.
                        <br /> Neće doći ni previše ni premalo, doći će ono što trebate, koliko trebate i u obliku u
                        kojem trebate.
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
                    <h2>Kako se pripremiti za rad?</h2>
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
                        <li>
                            djeca se crtaju redoslijedom kojim su rođena, prvi ljevi simbol je za prvorođeno dijete.
                        </li>
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
