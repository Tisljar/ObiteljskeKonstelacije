import { Link } from 'react-router-dom';
import './index.css';

const ObiteljskeKonstalacijeEs = () => {
    const obiteljskeKonstalacije = require('../../../assets/img/ObiteljskeKonstalacijeFraktal.png');
    return (
        <>
            <div className="row">
                <div className="col-md-12 col-td-6 col-7">
                    <h1>Što su obiteljske konstelacije?</h1>
                    <p>
                        Osnivač metode obiteljskih ili sistemskih konstelacija, Bert Hellinger u ovoj metodi uspješno je
                        primijenio principe psihologije i duhovnosti te omogućio dublji uvid u složene sustave
                        međuljudskih odnosa.
                    </p>
                    <p>
                        Osnovna postavka ove metode je da u obitelji, kao i u svim drugim sustavima kojima pripadamo,
                        djeluje poredak ljubavi koji omogućava prijenos ljubavi i životne energije na sve članove
                        sustava. Kada svi članovi imaju osjećaj pripadanja i kada svi članovi poštuju poredak, život se
                        odvija svojim punim potencijalom.
                    </p>
                    <p>
                        Na obiteljskim konstelacijama ćete dobiti uvid zašto je do sada nešto bilo i kako iz prošlosti
                        preuzeti mudrost i snagu za ostvarenje ciljeva u budućnosti.
                    </p>
                    <p>Ova metoda najčešće se primjenjuje na radionicama ali je moguć i individualni rad.</p>
                    <Link to={'/konstalacije'}>
                        <button className="md-padding-bottom btn-default">Saznajte više</button>
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
                        Fraktali su geometrijski objekti koji su samoslični, sastoje se od umanjenih inačica samih sebe.
                        Slično je sa obiteljima: svaka obitelj je sastavljena od slike svojih članova, a svaka osoba je
                        umanjena slika svoje obitelji.
                    </p>
                </div>
            </div>
        </>
    );
};

export default ObiteljskeKonstalacijeEs;
