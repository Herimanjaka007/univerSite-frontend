/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-secondary text-white pt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5>À propos</h5>
                        <p>
                            Nous sommes une plateforme dédiée à la comparaison des universités.
                            Notre objectif est de vous fournir toutes les informations nécessaires
                            pour choisir l'université qui vous convient le mieux.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h5>Pages</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white">Accueil</Link></li>
                            <li><Link to="/university" className="text-white">Universités</Link></li>
                            <li><Link to="/login" className="text-white">Connexion</Link></li>
                            <li><Link to="/signup" className="text-white">Inscription</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact</h5>
                        <p>
                            <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com" className="text-white">geit.herimanjaka@gmail.com</a><br />
                            <i className="bi bi-telephone"></i> +33 33 000 11
                        </p>
                        <div>
                            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-3 bg-black text-light py-3">
                <p className="mb-0">&copy; {new Date().getFullYear()} PiCode. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
