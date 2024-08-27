import { useNavigate, Link } from "react-router-dom";
import "./index.scss";
import vite from "/vite.svg"
import { useState } from "react";
import Alert from "../Alert";
import { getUserId } from "/src/utils/function";
import { URL } from "../../utils/url";

const Login = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const formData = new FormData(e.target);
        const [username, password] = [formData.get("username"), formData.get("password")];


        try {
            const response = await fetch(`${URL}/users/jwt/token/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('access', data.access);
                localStorage.setItem('refresh', data.refresh);
                getUserId(username).then(
                    id => {
                        localStorage.setItem('user_id', id)
                        navigate('/dashboard');
                    }
                )
            }
            else {
                setError("Nom d'utilisateur ou Mot de passe invalide");
            }
        } catch {
            setError('Erreur de reseau, Veuillez réessayez ultérieurement');
        } finally {
            setLoading(false);
        }


    }

    return (
        <section className="login-body">
            <div className="login-wrapper">
                <div className="logo">
                    <img
                        src={vite}
                        alt="Logo login"
                    />
                </div>
                <div className="text-center mt-4 name">UniverSite</div>
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user ms-2" />
                        <input type="text" name="username" id="userName" placeholder="Nom d'utilisateur" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key ms-2" />
                        <input type="password" name="password" id="pwd" placeholder="Mot de passe" />
                    </div>
                    {error && <Alert message={error} handler={() => setError(null)} />}
                    <button className="btn__login mt-3">
                        {loading ?
                            (<div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>) :
                            "Se connecter"
                        }
                    </button>
                </form>
                <div className="text-center fs-6">
                    <Link to="/">
                        <button className="btn btn-secondary">
                            Revenir a l&apos;accueil
                        </button>
                    </Link>
                </div>
            </div>
        </section>

    );
}

export default Login;