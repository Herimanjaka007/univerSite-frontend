import { useState, useEffect } from "react";
import ButtonCustom from "../ButtonCustom";
import { Link } from "react-router-dom";
import { URL } from "../../utils/url";
import CardLoading from "../CardLoading";

const ProfilEdit = () => {
    const [user, setUser] = useState(null);
    const userId = localStorage.getItem('user_id');

    useEffect(() => {
        fetch(`${URL}/users/${userId}/`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log(formData);
    }


    return (
        <>
            {
                user ? (
                    <div className="container-xl px-4 mt-4">
                        <div className="row">
                            <div className="col-xl-4">
                                <div className="card mb-4 mb-xl-0">
                                    <div className="card-header">Profile Picture</div>
                                    <div className="card-body text-center">
                                        <img
                                            className="img-account-profile w-100 rounded-circle mb-2"
                                            src={user?.profil_picture}
                                            alt="logo utilisateur"
                                        />
                                        <div className="small font-italic text-muted mb-4">
                                            JPG or PNG no larger than 5 MB
                                        </div>
                                        <label htmlFor="profil_picture">
                                            Changer de logo
                                            <input type="file" name="profil_picture" id="profil_picture" className="form-control bg-primary text-light" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8">
                                <div className="card mb-4">
                                    <div className="card-header">Account Details</div>
                                    <div className="card-body">
                                        <form onSubmit={handleEditSubmit}>
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputUsername">
                                                    Nom d&apos;utilisateur
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputUsername"
                                                    type="text"
                                                    placeholder="username"
                                                    defaultValue={user?.username}
                                                    name="username"
                                                />
                                            </div>
                                            <div className="row gx-3 mb-3">
                                                {
                                                    user.type_user === "Etudiant" &&
                                                    <div className="col-md-6">
                                                        <label className="small mb-1" htmlFor="inputFirstName">
                                                            First name
                                                        </label>
                                                        <input
                                                            className="form-control"
                                                            id="inputFirstName"
                                                            type="text"
                                                            placeholder="Enter your first name"
                                                            defaultValue={user?.first_name}
                                                            name="first_name"
                                                        />
                                                    </div>
                                                }
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputLastName">
                                                        {user.type_user === "Edutiant" ? "Last name" : "Nom de l'etablissement"}
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="inputLastName"
                                                        type="text"
                                                        placeholder="Enter your last name"
                                                        defaultValue={user?.last_name}
                                                        name="last_name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row gx-3 mb-3">
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputLocation">
                                                        Adresse
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="inputLocation"
                                                        type="text"
                                                        placeholder="Enter your location"
                                                        defaultValue={user?.adress}
                                                        name="adress"
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <label className="small mb-1" htmlFor="inputEmailAddress">
                                                    Adresse email
                                                </label>
                                                <input
                                                    className="form-control"
                                                    id="inputEmailAddress"
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    defaultValue={user?.email}
                                                    name="email"
                                                />
                                            </div>
                                            <div className="row gx-3 mb-3">
                                                <div className="col-md-6">
                                                    <label className="small mb-1" htmlFor="inputPhone">
                                                        Numero tel
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        id="inputPhone"
                                                        type="tel"
                                                        placeholder="Enter your phone number"
                                                        defaultValue={user?.phone_number}
                                                        name="phone_number"
                                                    />
                                                </div>
                                            </div>
                                            <Link to="/dashboard">
                                                <button className="btn btn-secondary me-5">Annuler</button>
                                            </Link>
                                            <ButtonCustom buttonText="Sauvegarder" type="submit" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) :
                    (
                        <CardLoading width="100vw" />
                    )
            }
        </>
    )
}

export default ProfilEdit;