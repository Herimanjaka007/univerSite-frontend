/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";
import CardLoading from "../../components/CardLoading";
import { URL } from "../../utils/url";


const Dashboard = () => {
    const [user, setUser] = useState(null);
    const userId = localStorage.getItem('user_id');
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${URL}/users/${userId}/`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, [userId]);

    const handleLogoutClick = () => {
        const accessToken = localStorage.getItem('access');

        fetch(`${URL}/users/logout/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
        }).then(() => {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            localStorage.removeItem('user_id');
            navigate('/');
        });
    }


    return (<>
        {user ? (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-12">
                        <div id="content" className="content content-full-width">
                            <div className="profile">
                                <div className="profile-header">
                                    <div className="profile-header-cover" />
                                    <div className="profile-header-content">
                                        <div className="profile-header-img">
                                            <img
                                                src={user?.profil_picture}
                                                alt=""
                                            />
                                        </div>
                                        <div className="profile-header-info">
                                            <h4 className="m-t-10 m-b-5">{user?.last_name}</h4>
                                            <p className="m-b-10">{user?.username}</p>
                                            <Link to="edit" className="btn btn-sm btn-info mb-2">
                                                EDIT PROFIL
                                            </Link>
                                            <button
                                                className="btn btn-sm btn-info mb-2 d-block text-light ms-auto"
                                                onClick={handleLogoutClick}
                                            >
                                                Se deconnecter
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="profile-header-tab nav nav-tabs">
                                        <li className="nav-item">
                                            <Link to="" className="nav-link_">
                                                PROFIL
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="" className="nav-link_">
                                                PARCOURS
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row">
                                <SectionInfo info={user?.adress} infoTitle="Adresse" classIcon="bi-geo-alt-fill" />
                                {
                                    user?.phone_number &&
                                    <SectionInfo info={user?.phone_number} infoTitle="Telephone" classIcon="bi-telephone-fill" />
                                }
                                {
                                    user?.first_name &&
                                    <SectionInfo info={user?.first_name} infoTitle="Parcours ou Branches" classIcon="bi-info-circle-fill" />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) :
            (
                <CardLoading width="98vw" />
            )
        }
    </>
    );

}
export default Dashboard;

const SectionInfo = ({ info, infoTitle, classIcon, maxWidth = '18rem' }) => {
    return (
        <section className="container-info mt-4 col-xl-4">
            <div className="card text-white list mb-3" style={{ maxWidth: maxWidth }}>
                <div className="card-header d-flex align-items-center">
                    <i className={classIcon && `bi ${classIcon} me-2`}></i>
                    <span>{infoTitle}</span>
                </div>
                <div className="card-body">
                    <p className="card-text">
                        {info}
                    </p>
                </div>
            </div>
        </section>
    );
}