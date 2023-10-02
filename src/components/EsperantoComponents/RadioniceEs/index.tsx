import { Link } from 'react-router-dom';
import './index.css';

const RadioniceEs = () => {
    const nacrt = require('../../../assets/img/nacrt.png');
    return (
        <>
            <div className="row">
                <h1>Radionice i susreti</h1>
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
                        <br />
                        Konstelacije su tiha metoda u kojoj se uvidi i odgovori čitaju iz tjelesnih reakcija na
                        podsvjesne upite i čežnje, otvaraju mogućnosti rješenja u tihom i dubokom dijalogu sa dušom,
                        onkraj buke uma i emocija. Analiziranje i racionaliziranje, emocionalne akcije i reakcije mogu
                        stvoriti ometanje u kojoj se šapat duše može zagubiti. Zato zadržite otvorenost prema novom, za
                        početak je dovoljno.
                    </p>
                    <p>Ukoliko želite proučiti dodatni materijal prije radionice možete saznati više:</p>
                    <Link to={'/radionice'}>
                        <button className="btn-default">Saznajte više</button>
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
