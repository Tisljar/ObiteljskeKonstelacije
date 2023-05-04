import './index.css';

const EmailMe = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 center">
                    <h2 className="padding-right">Pošaljite mi mail sa prijavom ili upitom!</h2>
                    <form action="mailto:ankica.konstelacije@gmail.com" method="post" className="inline-block">
                        <input type="submit" value="Pošaljite mi mail" className="btn-default mg-center" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default EmailMe;
