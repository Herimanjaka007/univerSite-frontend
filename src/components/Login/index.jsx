import { useNavigate, Link } from "react-router-dom";
import "./index.scss";
import vite from "/vite.svg"
import { useState } from "react";
import Alert from "../Alert";
import { getUserId } from "/src/utils/function";

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
            const response = await fetch('http://localhost:8000/users/token/', {
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
                throw new Error("Nom d'utilisateur ou Mot de passe invalide");
            }
        } catch {
            setError('Erreur de reseau, Veuillez ressayez ulterieurement');
        } finally {
            setLoading(false);
        }


    }

    return (
        <section className="login-body">
            <div className="wrapper">
                <div className="logo">
                    <img
                        src={vite}
                        alt="Logo login"
                    />
                </div>
                <div className="text-center mt-4 name">UniverSite</div>
                {error && <Alert message={error} handler={() => setError(null)} />}
                <form className="p-3 mt-3" onSubmit={handleSubmit}>
                    <div className="form-field d-flex align-items-center">
                        <span className="far fa-user" />
                        <input type="text" name="username" id="userName" placeholder="Nom d'utilisateur" />
                    </div>
                    <div className="form-field d-flex align-items-center">
                        <span className="fas fa-key" />
                        <input type="password" name="password" id="pwd" placeholder="Mot de passe" />
                    </div>
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