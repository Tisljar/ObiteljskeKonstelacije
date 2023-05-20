import './index.css';

const LinkoviProšireno = () => {
    return (
        <>
            <div className="row">
                <h2>Linkove na korisne sadržaje i informacije</h2>
                <p>
                    Član sam sljedećih udruženja konstelatora:
                    <ul>
                        <li>
                            ISCA -{' '}
                            <a href="https://isca-network.org/" className="learn">
                                {' '}
                                International system constellations association
                            </a>
                        </li>
                        <li>
                            Constelators international -{' '}
                            <a href="https://constellators-international.com/" className="learn">
                                constellators-international
                            </a>
                        </li>
                        <li>
                            Udruga „Konstelacija“ -{' '}
                            <a href="https://udrugakonstelacija.com/" className="learn">
                                Udruga "KONSTELACIJA" - Constellations According to Hellinger International
                            </a>
                        </li>
                    </ul>
                </p>
                <p>
                    Dodatni zanimljivi i korsini linkovi:
                    <ul>
                        <li>starnica mojih učitelja Alemke i Max-a Dauskardta:</li>
                        <li>
                            <a href="https://konstelacijakroacija.wordpress.com/" className="learn">
                                Zapisi na duši | Imprints on the Soul - Constellations according to Hellinger
                            </a>
                            <ul>
                                <li>
                                    <a
                                        href="https://konstelacijakroacija.wordpress.com/konstelacije/"
                                        className="learn"
                                    >
                                        Sistemske Konstelacije | Zapisi na duši
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://konstelacijakroacija.wordpress.com/resursi-3/clanci/"
                                        className="learn"
                                    >
                                        Članci & Blogovi | Zapisi na duši
                                    </a>
                                </li>
                                <li>
                                    <a href="https://konstelacijakroacija.wordpress.com/blog/" className="learn">
                                        Blog | Zapisi na duši
                                    </a>
                                </li>
                                <li>
                                    <a href="https://konstelacijakroacija.wordpress.com/resursi-3/" className="learn">
                                        Resursi | Zapisi na duši
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </p>
            </div>
            <div className="row">
                <h2>Videozapisi i linkovi</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>Prilog u Tv-emisiji: Dobro jutro Hrvatska, povodom seminara Stefana Hausera</h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.youtube.com/embed/ycibfRCr_ic?wmode=opaque&amp;rel=0"
                        title="Prilog u Tv-emisiji: Dobro jutro Hrvatska, povodom seminara Stefana Hausera"
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>Na rubu znanosti: Sistemske konstelacije i odnosi razgovor sa Alemkom Dauskardt</h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.youtube.com/embed/Ff4GjTEOpjE"
                        title="Na rubu znanosti: Sistemske konstelacije i odnosi razgovor sa Alemkom Dauskardt"
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className="yt-title"></div>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>Na rubu znanosti: Sistemske konstelacije,razgovor sa Stefanom Hauserom</h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.youtube.com/embed/7aORJaZceo8"
                        title="Na rubu znanosti: Sistemske konstelacije,razgovor sa Stefanom Hauserom"
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>Na rubu znanosti: Trauma i sistemske konstelacije, razgovor sa Anngwyn St Just</h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.youtube.com/embed/3WdwF72-aCA"
                        title="Na rubu znanosti: Trauma i sistemske konstelacije, razgovor sa Anngwyn St Just"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>Vedran i Ankica: Pobačaj - duhovne posljedice i iscjeljivanje.</h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Falkemijazivota%2Fvideos%2F2736338436506540%2F&show_text=false&width=560&t=0"
                        title="Vedran i Ankica: Pobačaj - duhovne posljedice i iscjeljivanje."
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>Na rubu znanosti: Sistemske konstelacije i partnerski odnosi</h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.youtube.com/embed/Ff4GjTEOpjE"
                        title="Na rubu znanosti - SISTEMSKE KONSTELACIJE I PARTNERSKI ODNOSI"
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default LinkoviProšireno;
