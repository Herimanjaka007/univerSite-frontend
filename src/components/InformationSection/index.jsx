import faqImage from "../../assets/faq_graphic.svg";
import bg from "../../assets/white-wave-bg.svg";
import { Link } from "react-router-dom";
import ButtonCustom from "../ButtonCustom";

const InformationSection = () => {
    return (
        <>
            <section className="information pt-5" id="apropos">
                <div className="container">
                    <div className="col-12 text-center">
                        <h1 className="text-white">
                            <strong>À propos</strong>
                        </h1>
                    </div>
                    <div className="row container mt-2 text-light py-5">
                        <div className="col-md-12 col-sm-12 mt-3">
                            <p className="text text-justify fs-5">
                                Bienvenue sur UniverSite, votre compagnon numérique pour explorer
                                les possibilités infinies après le baccalauréat. Notre application web
                                innovante utilise un algorithme sophistiqué pour analyser vos
                                intérêts, vos compétences, vos objectifs de carrière et vos
                                préférences géographiques.
                            </p>
                            <ul className="ul-text my-5">
                                <li className="li-list">
                                    <i className="fas fa-check-circle" /> Plus de 1349 formations
                                </li>
                                <li className="li-list my-2">
                                    <i className="fas fa-check-circle" /> Environ 350 universités
                                    privés, semi-privés et publiques
                                </li>
                                <li className="li-list">
                                    <i className="fas fa-check-circle" /> Avec les centres de formations
                                    professionnelles
                                </li>
                            </ul>
                            <Link to="/signup"><ButtonCustom buttonText="J'inscris mon etablissement" /></Link>
                        </div>
                        {/* <div className="col-md-6 col-sm-12 mt-3">
                        <p className="text">
                            Avec ces informations, Universite génère des recommandations
                            personnalisées pour les universités et les programmes d'études qui
                            correspondent le mieux à votre profil unique. Que vous soyez en quête
                            de la destination idéale pour poursuivre vos études universitaires ou
                            que vous cherchiez simplement à découvrir les multiples parcours qui
                            s'offrent à vous, UniverSite est là pour simplifier votre recherche.
                            Une application web dédiée à l'enseignement supérieure pour orienter
                            et aider les bacheliers à trouver leur voie.
                        </p>
                        <a href="#" className="btn btn-primary text-light fw-bold">
                            Voir plus
                        </a>
                    </div> */}
                    </div>
                </div>
                <img src={bg} alt="ito leizy" className="w-100" />
            </section>
            <section className="faq-section section-padding py-5" id="section_4" style={{ background: "white " }}>
                <div className="container">
                    <div className="row">
                        <div className="clearfix" />
                        <div className="col-lg-6 col-12 image">
                            <img
                                src={faqImage}
                                className="img-fluid mt-3 d-none d-xl-block"
                                style={{ width: "100%" }}
                                alt="FAQs"
                            />
                        </div>
                        <div className="col-xl-6 col-12 m-auto fs-5">
                            <div className="col-12">
                                <h1 className="mt-2 text-center">
                                    <strong>Que faire après le Bacc?</strong>
                                </h1>
                            </div>
                            <div className="accordion mb-3" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-title" id="headingOne">
                                        <button
                                            className="accordion-button fs-5"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Les questions à se poser
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseOne"
                                        className="accordion-collapse collapse show"
                                        aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body fs-5">
                                            <ul>
                                                <li>Quels sont mes intérêts et mes passions ?</li>
                                                <li>Quelles sont mes contraintes financières ?</li>
                                                <li>Ai-je des objectifs de carrière spécifiques ?</li>
                                                <li>
                                                    Quels sont mes points forts et mes faiblesses académiques ?
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-title" id="headingTwo">
                                        <button
                                            className="accordion-button collapsed fs-5"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Comment bien choisir mon parcours?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseTwo"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingTwo"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <ul>
                                                <li>
                                                    <strong>Auto-evaluation :</strong> Commencez par vous
                                                    évaluer vous-même. Identifiez vos intérêts, vos passions,
                                                    vos compétences et vos valeurs. Réfléchissez à ce qui vous
                                                    motive et vous inspire.
                                                </li>
                                                <li>
                                                    <strong>Evaluer vos objectifs :</strong> Réfléchissez à vos
                                                    objectifs à court terme et à long terme. Considérez comment
                                                    chaque option de parcours pourrait vous aider à atteindre
                                                    vos objectifs personnels et professionnels.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-title" id="headingThree">
                                        <button
                                            className="accordion-button collapsed fs-5"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Où continuer mes études?
                                        </button>
                                    </h2>
                                    <div
                                        id="collapseThree"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            Pensez à l'accessibilité financière : Évaluez les coûts de
                                            scolarité, les frais supplémentaires, les options de bourses
                                            d'études, d'aides financières et de prêts étudiants.
                                            Assurez-vous que le coût total de votre éducation est viable
                                            pour vous et votre famille.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default InformationSection;