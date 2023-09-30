const KakoPostavitiEs = () => {
    const nacrt = require('../../assets/img/nacrt.png');
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h2>Kako se pripremiti za rad?</h2>
                    <p>
                        Možete pokušati osjetiti na koje područje života najviše želite pogledati:
                        <br />
                        partnerstvo, odnos s djecom, odnos s roditeljima, simptome i/ili bolesti, osjećaje
                        nezadovoljstva u nekom dijelu života ili poslovna pitanja. Konkretna pitanja ostavite da se
                        uobliče tijekom radionice.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <p>
                        Za one izrazito uporne, predlažem nacrtati svoje obiteljsko stablo. U obitelji stablo pripadaju:{' '}
                        <br />
                    </p>
                    <ul>
                        <li>partneri i djeca,</li>
                        <li> roditelji i braća i sestre partnera,</li>
                        <li>bake, djedovi, braća i sestre roditelja od partnera.</li>
                        <li>
                            djeca se crtaju redoslijedom kojim su rođena, prvi lijevi simbol je za prvorođeno dijete.
                        </li>
                        <li>Nerođena djeca se crtaju iznad crte za vezu.</li>
                        <li>Prekinuta veza je važna prethodna veza u kojoj nije bilo djece.</li>
                        <li>
                            Svaka veza u kojoj je bilo djece ima jednaku važnost i isti simbol, za vezu ili za prekid.
                        </li>
                        <li>Izvan bračna veza je veza koja je istovremena sa brakom.</li>
                        <li>
                            Za prerano preminule se upisuje godina rođenja i smrti te uzrok smrti: rat, nasilna smrt,
                            bolest ili nesretni slučaj.
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
                        Pitajte svoje roditelje o njihovoj mladosti i mladosti njihovih roditelja, pitajte ih kada i
                        kako su zaljubili, što im je bilo najljepše a što najteže. Podijelite i svoja iskustva sa svojom
                        djecom. Veselimo se zajedničkom druženju i <br /> vidimo se na radionici
                    </p>
                </div>
            </div>
        </>
    );
};

export default KakoPostavitiEs;
