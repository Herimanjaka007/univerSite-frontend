import { useEffect, useState } from "react";
import UniversityCard from "../UniversityCard";
import CardLoading from "../CardLoading";
import { Link } from "react-router-dom";
import { URL } from "../../utils/url";

const UniversitySection = ({ title }) => {
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        const fetchData = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

        fetchData(`${URL}/users/`)
            .then(data => setUniversity(data.slice(0, 4)));
    }, [])

    return (
        <section className="list bg-white text-light pb-5" id="universite">
            <div className="container">
                <div className="list-title">
                    <h1 className="text-center py-5">
                        <strong>{title}</strong>
                    </h1>
                </div>
                <div className="row mb-5">
                    {university.length !== 0 ?
                        (university.map(univ => <UniversityCard
                            key={univ.id}
                            nom={univ.last_name}
                            img={univ.profil_picture}
                            adress={univ.adress}
                        />)) :
                        (
                            <>
                                <CardLoading />
                                <CardLoading />
                                <CardLoading />
                            </>
                        )

                    }
                </div>
                <div className="col-12 text-center mt-5">
                    <p className="">
                        <Link to="/university" className="btn btn-dark fw-bold">
                            {" "}
                            Voir tout les universités
                        </Link>
                    </p>
                </div>
            </div>
        </section>

    );
}

export default UniversitySection;