import './index.css';

const EmailMeEs = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 center">
                    <h2 className="padding-right">Sendu al mi retpoŝton kun petskribo aŭ enketo!</h2>
                    <form action="mailto:ankica.konstelacije@gmail.com" method="post" className="inline-block">
                        <input
                            type="submit"
                            value="Pošaljite mi mail na ankica.konstelacije@gmail.com"
                            className="btn-default mg-center"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default EmailMeEs;
