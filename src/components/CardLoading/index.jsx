/* eslint-disable react/prop-types */
const CardLoading = ({ width }) => {
    return (
        <div className="card" style={{ width: width || '18rem', margin: '10px' }}>
            <div className="card-body">
                <div className="placeholder-glow">
                    <div className="placeholder col-12" style={{ height: '150px', marginBottom: '10px' }}></div>
                    <h5 className="card-title placeholder-glow">
                        <span className="placeholder col-6"></span>
                    </h5>
                    <p className="card-text placeholder-glow">
                        <span className="placeholder col-7"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-4"></span>
                        <span className="placeholder col-6"></span>
                        <span className="placeholder col-8"></span>
                    </p>
                </div>
            </div>
        </div>

    );
}

export default CardLoading;