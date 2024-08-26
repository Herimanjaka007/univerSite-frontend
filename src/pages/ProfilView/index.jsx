import { useParams } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Profil from "../../components/Profil";
import { useEffect, useState } from "react";
import { URL } from "../../utils/url";
import CardLoading from "../../components/CardLoading";

const ProfilView = () => {
    const { idUniversity } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch(`${URL}/users/${parseInt(idUniversity)}`)
            .then(res => res.json())
            .then(user => setUser(user));
    }, [idUniversity]);

    return (
        <>
            <NavBar />
            {user ? (
                <Profil hide={true} user={user} />
            ) :
                <CardLoading width="95vw" />
            }
        </>
    );
}

export default ProfilView;