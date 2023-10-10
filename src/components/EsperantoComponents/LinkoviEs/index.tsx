import { Link } from 'react-router-dom';
import './index.css';

const LinkoviEs = () => {
    return (
        <>
            <div className="row">
                <h2>Videoj kaj ligiloj</h2>
            </div>
            <div className="row">
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>
                            Kontribuo en la televida programo: Bonan matenon Kroatio, okaze de la seminario de Stefan
                            Hauser
                        </h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.youtube.com/embed/ycibfRCr_ic?wmode=opaque&amp;rel=0"
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className="col-md-12 col-td-6 col-6">
                    <div className="yt-title mg-top-20">
                        <h3>ĈE LA RANDO DE LA SCIENCO – Sistemaj konstelacioj, konversacio kun Stefan Hauser</h3>
                    </div>
                    <iframe
                        width="100%"
                        height="300px"
                        className="yt-video"
                        src="https://www.youtube.com/embed/7aORJaZceo8"
                        title="Na rubu znanosti - SISTEMSKE KONSTELACIJE, 1.6.2015."
                        allowFullScreen={true}
                    ></iframe>
                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 center mg-top-20">
                        <Link to={'/eolinkovi'}>
                            <button className="btn-default">Regardu plu</button>
                        </Link>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>
        </>
    );
};

export default LinkoviEs;
