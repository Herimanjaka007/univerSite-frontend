/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from "react-router-dom";
import banner from "../../assets/banner.svg";

const BannerSection = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        navigate("/university", { state: { query: formData.get("keyword") } });
    }

    return (
        <section className="banner" id="accueil">
            <div className="banner-content container-fluid-xl px-xl-5">
                <div className="row ">
                    <div className="col-12 col-xl-6 mt-xl-5 px-5 description">
                        <h2 className="banner-text text-secondary pt-xl-5 col-md-12">
                            <strong>Préparez votre étude supérieure</strong>
                        </h2>
                        <p className="text-muted col-md-12 fs-5 mt-5">
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
                            className="custom-form  py-2 mb-lg-0 col-md-10 col-xl-10 mt-5"
                            role="search"
                            onSubmit={handleSubmit}
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