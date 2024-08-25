import { useState, useEffect } from 'react';
import Alert from '../Alert';
import ButtonCustom from '../ButtonCustom';
import { getUserId } from '../../utils/function';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import { URL } from '../../utils/url';

const SignupForm = () => {
    const [step, setStep] = useState(1);
    const [schoolName, setSchoolName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [photo, setPhoto] = useState(null);
    const [isNextEnabled, setIsNextEnabled] = useState(false);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (step === 1) {
            const pattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
            const emailValid = pattern.test(email);
            setIsNextEnabled(schoolName !== '' && address !== '' && emailValid);
        }
        else if (step === 3) {
            const passwordValid = password.length >= 6;
            setIsNextEnabled(username !== '' && passwordValid);
        }
    }, [schoolName, address, email, username, password, step]);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleBack = () => {
        setStep(step - 1);
    };

    const handleSubmit = async () => {
        setLoading(true);
        const formData = new FormData();
        formData.append('last_name', schoolName);
        formData.append('adress', address);
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);
        if (photo) formData.append('profil_picture', photo);

        try {
            const response = await fetch(`${URL}/users/create/`, {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                fetch(`${URL}users/token/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('access', data.access);
                        localStorage.setItem('refresh', data.refresh);
                        getUserId(username).then(
                            id => {
                                localStorage.setItem('user_id', id)
                                navigate('/dashboard');
                            }
                        )
                    })
            } else {
                setErrorMessage("Username deja prise");
            }
        }
        catch {
            setErrorMessage("Erreur de reseau, veuillez reessayer ulterieurment");
        }
        finally {
            setLoading(false)
        }
    };

    return (
        <>
            <NavBar />
            <div className="container mt-4">
                <div className="card shadow">
                    <div className="card-body my-4">
                        {step === 1 && (
                            <form >
                                <h2 className="card-title">Étape 1</h2>
                                <div className="mb-3">
                                    <label htmlFor="schoolName" className="form-label">Nom de l&apos;école</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="schoolName"
                                        placeholder="Nom de l'école"
                                        value={schoolName}
                                        onChange={(e) => setSchoolName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Adresse</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="Adresse"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <ButtonCustom
                                        onClick={handleNext}
                                        disabled={!isNextEnabled}
                                        buttonText="Suivant"
                                    />
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <div>
                                <h2 className="card-title">Étape 2</h2>
                                <div className="mb-3">
                                    <label htmlFor="photo" className="form-label">Télécharger la photo ou logo de votre ecole</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="photo"
                                        accept="image/*"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                        name='profil_picture'
                                    />
                                </div>
                                {photo && (
                                    <div className="mb-3">
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt="Uploaded"
                                            className="img-thumbnail"
                                            width="100"
                                        />
                                    </div>
                                )}
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={handleBack}
                                    >
                                        Retour
                                    </button>
                                    <ButtonCustom
                                        onClick={handleNext}
                                        disabled={!isNextEnabled}
                                        buttonText="Suivant"
                                    />
                                </div>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h2 className="card-title">Étape 2</h2>
                                {errorMessage &&
                                    <Alert message="Username deja prise" handler={() => setErrorMessage("")} />
                                }
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Nom d&apos;utilisateur ou sigle (pour se connecter)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        placeholder="Nom d'utilisateur"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Mot de passe</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Mot de passe"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={handleBack}
                                    >
                                        Retour
                                    </button>
                                    <ButtonCustom
                                        onClick={handleSubmit}
                                        disabled={!isNextEnabled}
                                        buttonText={
                                            loading ?
                                                (<div className="spinner-border text-light" role="status">
                                                    <span className="visually-hidden">Loading...</span>
                                                </div>)
                                                :
                                                "Submit"
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignupForm;
