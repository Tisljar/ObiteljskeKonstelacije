const AboutMeNoBtn = () => {
    const ankicaJagnjic = require('../../assets/img/ankica-jagnjic.png');
    const certifikat = require('../../assets/img/SM0708-AnkicaJagnjie.png');
    return (
        <>
            <div className="row">
                <h2>O meni</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-5 col-4">
                    <div className="flex">
                        <div className="image-wrapper mg-center">
                            <img src={ankicaJagnjic} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-6 col-7">
                    <div className="about-content">
                        <p>
                            Ankica Jagnjić
                            <br /> Sa konstelcijama sam se susrela na radionicama Michaela Schaefer-a još davne 2004. i
                            one su mi pomogle da prebrodim brojne životne situacije. <br />
                            Uz rad na osobnim pitanjima, edukaciju sistemskih i obiteljskih konstelacije kod Alemke i
                            Maxa pohađala sam 2014. i 2015., a didatno sam se usavršavala na radionicama Stephana
                            Hausnera, Mariane Franke, na ISCA - susretima i drugim radionicama. Završila sam i edukaciju
                            za poslovne konstelacije kod Cecilio Fernandez Regojo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-7">
                    <div className="about-content">
                        <p>
                            Što su za mene konstelacije - osvjetljavanje prostora duše, prihvaćanje činjeničnog stanja
                            uz pronalaženje i usmjeravanje prema novim mogućnostima. Da kroz postavu vidimo ono što
                            znamo ali ne znamo da znamo. I sve to u prostoru suosjećanja i prihvaćanja, svakoga i svega
                            što pripada. U mojim postavama vodim se isključivo svom osjećaju klijenta, klijent je taj
                            koji daje smjer, brzinu i dubinu. Izuzetno mi je važno i da klijent što svjesnije osjeti
                            pomake i da pri tome preuzme odgovornost za sebe. Postava može biti slijepa, gluha,
                            otvorena, zatvorena grupna ili individualna – po potrebi. Na grupnim radionicama svi
                            pripadaju postavi, bilo kao osobe koje postavljaju ili učestvuju kao predstavnici ili kao
                            sjedeći sudionici. I svi smo dobitnici.
                        </p>
                        <p>
                            Samostalno radionice održavam 8 godina. Grupne radionice vodim ili online ili uživo u Apolon
                            centru. Uz grupne radionice radim i individualne radove.
                        </p>
                    </div>
                </div>
                <div className="col-md-12 col-td-1 col-1"></div>
                <div className="col-md-12 col-td-5 col-4">
                    <div className="flex">
                        <div className="image-wrapper mg-center">
                            <img src={certifikat} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutMeNoBtn;
