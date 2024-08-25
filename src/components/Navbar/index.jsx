import { Link } from 'react-router-dom';
import vite from "/vite.svg";
import ButtonCustom from '../ButtonCustom';


const NavBar = () => {
    return (
        <div className="content">
            <nav className="navbar navbar-bar navbar-expand-lg border-bottom px-5 py-2 shadow-sm">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={vite}
                            alt="Logo"
                            className="d-inline-block align-text-top"
                            style={{ width: 50 }}
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="">
                            <i className="fas fa-bars bar" />
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-lg-0 gap-3 mb-3 mt-2">
                            <li className="nav-itemfw-bold ">
                                <Link to="/" className="nav-link text-muted">
                                    <p>Accueil</p>
                                </Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/university" className="nav-link text-muted">
                                    <p>Universités</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="d-flex gap-3 ms-auto">
                            <Link>
                                <button
                                    className="btn btn-secondary"
                                >
                                    inscris votre etablissement
                                </button>
                            </Link>
                            <Link to="/login">
                                <ButtonCustom
                                    type="button"
                                    buttonText="Se connecter"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;