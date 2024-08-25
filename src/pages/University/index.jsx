import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import CardLoading from "../../components/CardLoading";
import UniversityCard from "../../components/UniversityCard";
import { URL } from "../../utils/url";

const University = () => {
    const [university, setUniversity] = useState([]);

    useEffect(() => {
        const fetchData = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

        fetchData(`${URL}/users/`)
            .then(data => setUniversity(data.slice(2).reverse()));
    }, [])

    return (
        <>
            <NavBar />
            <section className="list pb-5 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            {/* <div className="col-md-2">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Rechercher &amp; Filtrer</h5>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="search" className="form-label">
                                                Recherche
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="search"
                                                placeholder="Rechercher un produit"
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Catégories</label>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="category1"
                                                />
                                                <label className="form-check-label" htmlFor="category1">
                                                    Catégorie 1
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="category2"
                                                />
                                                <label className="form-check-label" htmlFor="category2">
                                                    Catégorie 2
                                                </label>
                                            </div>
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    id="category3"
                                                />
                                                <label className="form-check-label" htmlFor="category3">
                                                    Catégorie 3
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label htmlFor="sort" className="form-label">
                                                Trier par
                                            </label>
                                            <select className="form-select" id="sort">
                                                <option defaultValue="">Choisir...</option>
                                                <option value="price_asc">Prix: Bas à Élevé</option>
                                                <option value="price_desc">Prix: Élevé à Bas</option>
                                                <option value="rating">Meilleure Évaluation</option>
                                            </select>
                                        </div>
                                        <button type="button" className="btn btn-primary w-100">
                                            Appliquer les filtres
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        university.length == 0 ?
                                            (
                                                <>
                                                    <CardLoading />
                                                    <CardLoading />
                                                    <CardLoading />
                                                </>
                                            ) :
                                            university.map(
                                                univ => <UniversityCard
                                                    key={univ.id}
                                                    img={univ.profil_picture}
                                                    nom={univ.last_name}
                                                    adress={univ.adress}
                                                />
                                            )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default University;