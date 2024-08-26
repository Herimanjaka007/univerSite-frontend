const UniversityCard = ({ img, nom, adress }) => {
    return (
            <div className="card p-3 university-card">
                <img
                    src={img}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title text-center">
                        {nom}
                    </h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <p className="text-muted">
                            {" "}
                            <i className="fas fa-location-dot fs-4 mx-2 mt-2" />{" "}
                            {adress}
                        </p>
                    </li>
                </ul>
            </div>
    );
}

export default UniversityCard;