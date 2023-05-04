import './index.css';

const LinkoviProšireno = () => {
    return (
        <>
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
                        title="Na rubu znanosti - SISTEMSKE KONSTELACIJE, 1.6.2015."
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
                        title="Na rubu znanosti - SISTEMSKE KONSTELACIJE, 1.6.2015."
                        allowFullScreen={true}
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export default LinkoviProšireno;
