const SearchBar = ({searchTerm , handleChange}) => {
    return (
        <form
            method="get"
            className="custom-form  pt-2 mb-lg-0 col-md-10 col-xl-10"
            role="search"
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
        </form>
    );
}

export default SearchBar;