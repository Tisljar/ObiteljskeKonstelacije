import './index.css';

const ObiteljskeKonstalacije = () => {
    const obiteljskeKonstalacije = require('../../assets/img/ObiteljskeKonstalacijeFraktal.png');
    return (
        <>
            <div className="row">
                <h1>Što su obiteljske konstalacije?</h1>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-7">
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

                    <button className="md-padding-bottom btn-default">Saznajte više</button>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-5 col-4 stablo">
                    <img src={obiteljskeKonstalacije} alt="" className="fraktal" />
                </div>
            </div>
        </>
    );
};

export default ObiteljskeKonstalacije;
