import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import CardLoading from "../../components/CardLoading";
import UniversityCard from "../../components/UniversityCard";
import { URL } from "../../utils/url";
import SearchBar from "../../components/SearchBar";

const University = () => {
    const [universities, setUniversities] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const universitiesPerPage = 4;

    useEffect(() => {
        const fetchData = async (url) => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }

        fetchData(`${URL}/users/`)
            .then(data => data.slice(2).reverse())
            .then(data => setUniversities(data.filter(university => university?.last_name.toLowerCase().includes(searchTerm.toLowerCase()))))
    }, [searchTerm])

    const indexOfLastUniversity = currentPage * universitiesPerPage;
    const indexOfFirstUniversity = indexOfLastUniversity - universitiesPerPage;
    const currentUniversities = universities.slice(indexOfFirstUniversity, indexOfLastUniversity);
    const totalPages = Math.ceil(universities.length / universitiesPerPage);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <NavBar />
            <section className="list pb-5 pt-5" style={{ minHeight: "95vh" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mb-3 ms-auto">
                            <SearchBar searchTerm={searchTerm} handleChange={(e) => setSearchTerm(e.target.value)} />
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="row">
                                    {
                                        universities.length == 0 ?
                                            (
                                                <>
                                                    <CardLoading />
                                                    <CardLoading />
                                                    <CardLoading />
                                                </>
                                            ) :
                                            currentUniversities.length > 0 &&
                                            currentUniversities.map(
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
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    paginate={pageNumber => setCurrentPage(pageNumber)}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </section >
        </>
    );
}

export default University;


const Pagination = ({ totalPages, currentPage, paginate, handlePrev, handleNext }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination justify-content-center mt-5">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button onClick={handlePrev} className="page-link" aria-label="Précédent">
                        <span aria-hidden="true">&laquo;</span>
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button onClick={handleNext} className="page-link" aria-label="Suivant">
                        <span aria-hidden="true">&raquo;</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}