import './index.css';

const OKonstalacijama = () => {
    const obiteljskeKonstalacije = require('../../assets/img/ObiteljskeKonstalacijeFraktal.png');
    return (
        <>
            <div className="row">
                <h2>Što su obiteljske konstelacije?</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-7">
                    <p>
                        Osnivač metode obiteljskih ili sistemskih konstelacija, Bert Hellinger u ovoj metodi uspješno je
                        primijenio principe psihologije, duhovnosti i tradicija afričkog šamanizma te omogućio dublji
                        uvid u složene sustave međuljudskih odnosa.
                    </p>
                    <p>
                        Osnovna postavka ove metode je da u obitelji, kao i u svim drugim sustavima kojima pripadamo,
                        djeluje poredak ljubavi koji omogućava prijenos ljubavi i životne energije na sve članove
                        sustava. Kada svi članovi imaju osjećaj pripadanja i kada svi članovi poštuju poredak, život se
                        odvija svojim punim potencijalom.
                    </p>
                    <p>
                        Međutim, neki događaji mogu privremeno poremetiti poredak ljubavi. Iscjeljenje i oporavak od
                        traume sustava i obitelji odvija se kroz emocionalne procese članova, ponekad i kroz više
                        generacija.
                    </p>
                    <p>
                        Iako toga nismo uvijek svjesni, u nama i kroz nas žive naši preci: njihova mudrost, iskustva ali
                        i patnje. Sve dok naši preci pate unutar nas, ne možemo biti stvarno sretni.
                    </p>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-5 col-4 stablo">
                    <img src={obiteljskeKonstalacije} alt="" className="fraktal" />
                    <p className="img-description">
                        Fraktali su geometrijski objekti koji su samoslični, sastoje se od umanjenih inačica samih sebe.
                        Slično je sa obiteljima: svaka obitelj je sastavljena od slike svojih članova, a svaka osoba je
                        umanjena slika svoje obitelji.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>
                        Stoga ponekad imamo osjećaj da nam život ne ide kako želimo, da nam uspjeh izmiče unatoč trudu.
                        Uz svu odlučnost, zrelost i posvećenost u radu na sebi, ne uspijevamo se osloboditi određenih
                        obrazaca ponašanja i reakcija okoline. Nezadovoljni smo odnosima u obitelji, ne uspijevamo
                        ostvariti smislene i produktivne veze s drugim ljudima, ne možemo se riješiti predrasuda,
                        osuđivanja, potrebe za kontrolom, osjećaja krivnje koji naizgled dolazi niotkud, razni simptomi
                        i bolesti ometaju nam život.
                    </p>
                    <p>
                        A ishodište i rješenje naših problema najčešće nije samo naše i u nama, već i u prošlosti
                        obitelji kojoj pripadamo.
                    </p>
                    <p>
                        Ukoliko ostanemo zarobljeni u skrivenim lojalnostima, predodređeno nam je da ponavljamo
                        naslijeđene traume, ostajemo zapetljani u potvrđivanju traume predaka.
                    </p>
                    <p>
                        A svaki zapetljaj blokira protok životne energije, drži nas u vječnom ponavljanju, stajanju na
                        mjestu i sprečava napredak i slobodu.
                    </p>
                </div>
            </div>
        </>
    );
};

export default OKonstalacijama;
