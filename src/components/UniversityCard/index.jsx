const UniversityCard = ({ img, nom, adress }) => {
    return (

        <div className="col-lg-3 col-md-6 mt-3">
            <div className="card p-3">
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
        </div>

    );
}

export default UniversityCard;