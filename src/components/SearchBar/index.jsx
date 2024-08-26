/* eslint-disable react/prop-types */
const SearchBar = ({ searchTerm, handleChange }) => {
    return (
        <div
            className="custom-form  pt-2 mb-lg-0 col-md-10 col-xl-10"
        >
            <div className="input-group input-group-lg">
                <input
                    name="keyword"
                    type="search"
                    className="form-control input-group-input"
                    id="keyword"
                    placeholder="Mot clé"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <span className="input-group-text" id="basic-addon1">
                    <i className="fas fa-search" />
                </span>
            </div>
        </div>
    );
}

export default SearchBar;