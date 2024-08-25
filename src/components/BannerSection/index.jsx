import banner from "../../assets/banner.svg";


const BannerSection = () => {
    return (
        <section className="banner bg-light" id="accueil">
            <div className="banner-content container-fluid-xl px-xl-5">
                <div className="row">
                    <div className=" col-12 col-xl-6 py-2 mt-xl-5 px-5 description d-grid">
                        <h2 className="banner-text text-secondary col-md-12">
                            <strong>Préparez votre étude supérieure</strong>
                        </h2>
                        <p className="text-muted mt-2l-3 col-md-12 fs-5 my-1">
                            Parmi les centaines d'universités à Madagascar, découvrer celle qui
                            vous corresponde avec un large choix de parcours. Avec
                            <span className="text-colored">
                                {" "}
                                <strong>UniverSite </strong>
                            </span>
                            , vous obtiendriez plus d'informations pour votre choix d'étude
                            supérieure. Adieu les confusions, confiez-nous votre avenir!
                        </p>
                        <form
                            method="get"
                            className="custom-form  pt-2 mb-lg-0 col-md-10 col-xl-10"
                            role="search"
                        >
                            <div className="input-group input-group-lg">
                                <input
                                    name="keyword"
                                    type="search"
                                    className="form-control input-group-input"
                                    id="keyword"
                                    placeholder="Mot clé"
                                    aria-label="Search"
                                />
                                <span className="input-group-text" id="basic-addon1">
                                    <i className="fas fa-search" />
                                </span>
                            </div>
                        </form>
                        <div className="logo-university mt-xl-5 pt-xl-5 mt-lg-3 pt-4">
                            <div className="row">
                                <div className="col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src="./images/logo/ge_it.jpg"
                                        className="img-fluid img-logo"
                                        alt=""
                                        style={{ width: 80 }}
                                    />
                                </div>
                                <div className=" col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src="./images/logo/cntemad.jpg"
                                        className="img-fluid img-logo"
                                        alt=""
                                        style={{ width: 100 }}
                                    />
                                </div>
                                <div className="col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src="./images/logo/inscae.png"
                                        className="img-fluid img-logo"
                                        alt=""
                                        style={{ width: 80 }}
                                    />
                                </div>
                                <div className=" col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src="./images/logo/ucm.webp"
                                        className="img-fluid img-logo"
                                        alt=""
                                        style={{ width: 80 }}
                                    />
                                </div>
                                <div className="col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src="./images/logo/UnivA.png"
                                        className="img-fluid img-logo"
                                        alt=""
                                        style={{ width: 120 }}
                                    />
                                </div>
                                <div className=" col-md-2 col-sm-4 col-6 d-flex align-items-center justify-content-center">
                                    <img
                                        src="./images/logo/iscam.png"
                                        className="img-fluid img-logo"
                                        alt=""
                                        style={{ width: 80 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 image-animated">
                        <img
                            src={banner}
                            alt="..."
                            className="animated img-fluid d-none d-xl-block"
                            style={{ height: "85%" }}
                        />
                    </div>
                </div>
            </div>
        </section>

    );
}

export default BannerSection;