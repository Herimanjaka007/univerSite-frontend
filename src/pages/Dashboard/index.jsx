/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardLoading from "../../components/CardLoading";
import { URL } from "../../utils/url";
import Profil from "../../components/Profil";


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
            <Profil user={user} handleLogoutClick={handleLogoutClick} />
        ) :
            (
                <CardLoading width="98vw" />
            )
        }
    </>
    );

}
export default Dashboard;